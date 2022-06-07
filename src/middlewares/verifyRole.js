const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { access_token } = req.cookies;

  if (access_token) {
    jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        next();
      } else {
        return res.redirect(`/${decode.role}`);
      }
    });
  } else {
    next();
  }
};
