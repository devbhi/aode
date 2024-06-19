require("dotenv").config({ path: "./config/.env" });
const Ro = require("./model/RO");
const Count = require("./model/Count");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const minimaal = require("minimaal");
const app = express();

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

// app.post(
//   "/addROUser",
//   query((req) =>
//     Ro.create({
//       service: req.body.service,
//       username: req.body.username,
//       email: req.body.email.toLowerCase(),
//     })
//   )
// );

app.post("/count", async (req, res) => {
  const { name } = req.body;

  try {
    // Find the document with the given name or create a new one if it doesn't exist
    let doc = await Count.findOneAndUpdate(
      { name },
      { $inc: { count: 1 } }, // Increment count by 1
      { new: true, upsert: true }
    );

    // Send the updated document as response
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = { app, connectDB };

// async (req, res) => {
//     try {
//       const { service, username, email } = req.body;
//   if (!service && !username && !email) {
//     res
//       .status(210)
//       .send({ status: false, message: "Service Details missing!" });
//   }
//       const ro = await Ro.create({
//         service,
//         username,
//         email: email.toLowerCase(),
//       });
//       res
//         .status(200)
//         .json({ status: true, message: "We have noted your request!!" });
//     } catch (e) {
//       console.log("error in service : " + e);
//       res
//         .status(220)
//         .send({ status: false, message: "Some error occured in User" });
//     }
//   }
