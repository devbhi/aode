class Router {
  constructor() {
    this.routes = new Map(); // Use a Map for efficient route lookup
  }

  get(path, handler) {
    this.routes.set(path, handler); // Store handlers in the Map
  }

  handleRequest(req, res) {
    const { url, method } = req;
    const handler = this.routes.get(url);

    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }
}

module.exports = Router;
