const aode = require("./aode");
const app = aode();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get("/getdata", (req, res) => {
  res.end("Home Page");
});
app.listen(4000);
// app.test();
