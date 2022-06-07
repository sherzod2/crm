const { read } = require("../utils/FS");

module.exports = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send("pishding ukam");
  }

  const foundUser = read("users.json").find(
    (user) => user.username === username && user.password === password
  );

  if (!foundUser) {
    return res.send("2 marta pishding");
  }

  req.user = foundUser;

  next();
};
