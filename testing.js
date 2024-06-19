const aode = require("./aode");
const app = aode();
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// });
app.use(aode.json());
app.use(aode.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  // console.log(req.url);
  res.status(340).send("hello");
});
app.listen(5000);
// app.test();
