exports = module.exports = response;

function response(res) {
  res.send = function (body) {
    if (typeof body === "string" || Buffer.isBuffer(body)) {
      res.setHeader("Content-Type", "text/plain");
      res.end(body);
    } else if (typeof body === "object") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
    } else {
      res.end(body);
    }
  };

  res.json = function (obj) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj));
  };

  res.status = function (code) {
    res.statusCode = code;
    return res;
  };
}
