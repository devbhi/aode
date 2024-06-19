require("dotenv").config({ path: "./config/.env" });
const Ro = require("./model/RO");
const cors = require("cors");
const mongoose = require("mongoose");
const minimaal = require("minimaal");
const app = minimaal();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(cors());
app.use(minimaal.json());
app.use(minimaal.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello from ENHOUSER</h1>");
});

app.post("/addROUser", async (req, res) => {
  try {
    const { service, username, email } = req.body;
    if (!service && !username && !email) {
      res
        .status(210)
        .send({ status: false, message: "Service Details missing!" });
    }
    const ro = await Ro.create({
      service,
      username,
      email: email.toLowerCase(),
    });
    res
      .status(200)
      .json({ status: true, message: "We have noted your request!!" });
  } catch (e) {
    console.log("error in service : " + e);
    res
      .status(220)
      .send({ status: false, message: "Some error occured in User" });
  }
});

module.exports = { app, connectDB };