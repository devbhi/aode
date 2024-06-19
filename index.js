// require("dotenv").config({ path: "./config/.env" });
const { app, connectDB } = require("./app");
// import { connectDB } from "./app.js";
const PORT = process.env.PORT || 4000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
});
