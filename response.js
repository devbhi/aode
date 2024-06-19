exports = module.exports = response;

function response(res) {
  let responseSent = false;

  res.send = function (body) {
    if (responseSent) return this;
    responseSent = true;

    if (typeof body === "string" || Buffer.isBuffer(body)) {
      res.setHeader("Content-Type", "text/plain");
      res.end(body);
    } else if (typeof body === "object") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
    } else {
      res.end(body);
    }
    return this; // Enable chaining
  };

  res.json = function (obj) {
    if (responseSent) return this;
    responseSent = true;

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(obj));
    return this; // Enable chaining
  };

  res.status = function (code) {
    res.statusCode = code;
    return this; // Enable chaining
  };
}
