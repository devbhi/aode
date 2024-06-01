var http = require("http");
const applyMiddlewares = require("./middleware");

var app = (exports = module.exports = {});

// Object to store routes
app.routes = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  PATCH: {},
};

// Method to register GET routes
app.get = function (path, handler) {
  this.routes["GET"][path] = handler;
};

// Method to register POST routes
app.post = function (path, handler) {
  this.routes["POST"][path] = handler;
};

// Method to register PUT routes
app.put = function (path, handler) {
  this.routes["PUT"][path] = handler;
};

// Method to register DELETE routes
app.delete = function (path, handler) {
  this.routes["DELETE"][path] = handler;
};

// Method to register PATCH routes
app.patch = function (path, handler) {
  this.routes["PATCH"][path] = handler;
};

// Middleware array
app.middlewares = [];

// Method to use middleware
app.use = function (middleware) {
  this.middlewares.push(middleware);
};

const server = http.createServer((req, res) => {
  applyMiddlewares(req, res, app.middlewares, () => {
    const handler = app.routes[req.method][req.url];
    if (handler) {
      handler(req, res);
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  });
});

app.listen = function listen(PORT) {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
