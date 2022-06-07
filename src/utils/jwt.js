const jwt = require("jsonwebtoken");

const sign = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    // expiresIn: 60 * 60 * 24,
  });

module.exports = {
  sign,
};
