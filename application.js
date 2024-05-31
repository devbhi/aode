var http = require("http");

var app = (exports = module.exports = {});

app.listen = function listen(PORT) {
  var server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello, Node.js!</h1>");
    }
    res.end();
  });
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
