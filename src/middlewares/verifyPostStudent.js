const { read } = require("../utils/FS");

module.exports = (req, res, next) => {
  const { username, password, course, group } = req.body;
  const { user } = req;
  const foundUser = read("users.json")?.find(
    (item) => item.username == username
  );

  if (foundUser)
    return res.send("bunday username ostidagi user allaqachon mavjud");

  if (user.role != "admin") {
    return res.redirect("/login");
  }

  if (!username || !password || !course || !group) {
    return res.send("data toliq emas");
  }

  if (username.length > 50 || password.length > 50) {
    return res.send("username yoki password juda uzun");
  }

  req.student = { groupId: [group - 0], username, password, role: "student" };

  next();
};
