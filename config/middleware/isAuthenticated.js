// export default (req, res, next) => {
module.exports = (req, res, next) => {
  return !req.user ? res.redirect('/') : next();
};
