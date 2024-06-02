const aode = require("./aode");
const app = aode();
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
app.get("/", (req, res) => {
  // console.log(req.url);
  res.send("hello");
});
app.listen(4000);
// app.test();
