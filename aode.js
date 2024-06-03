var bodyParser = require("body-parser");
var mixin = require("merge-descriptors");
var proto = require("./application");
// var req = require("./request");
// var res = require("./response");

exports = module.exports = createApplication;

function createApplication() {
  // var app;

  var app = {};

  mixin(app, proto);

  // expose the prototype that will get set on requests
  // app.request = Object.create(req, {
  //   app: { configurable: true, enumerable: true, writable: true, value: app },
  // });

  // // expose the prototype that will get set on responses
  // app.response = Object.create(res, {
  //   app: { configurable: true, enumerable: true, writable: true, value: app },
  // });

  // app.init();
  return app;
}

exports.json = bodyParser.json;
exports.raw = bodyParser.raw;
exports.text = bodyParser.text;
exports.urlencoded = bodyParser.urlencoded;
