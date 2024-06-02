exports = module.exports = request;

function request(req) {
  const parsedUrl = url.parse(req.url, true);
  req.query = parsedUrl.query;
  req.body = {};

  req.on("data", (chunk) => {
    req.body = JSON.parse(chunk.toString());
  });
}
