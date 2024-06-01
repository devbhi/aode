exports = module.exports = applyMiddlewares;

function applyMiddlewares(req, res, middlewares, done) {
  const next = (index) => {
    if (index === middlewares.length) return done();
    middlewares[index](req, res, () => next(index + 1));
  };
  next(0);
}
