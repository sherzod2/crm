const { read } = require("../utils/FS");

module.exports = (req, res, next) => {
  const { teacherName, groupName } = req.body;
  const { user } = req;
  const foundGroup = read("group.json")?.find(
    (item) => item.groupName == groupName
  );

  if (foundGroup)
    return res.send("bunday groupName ostidagi group allaqachon mavjud");

  if (user.role != "admin") {
    return res.redirect("/login");
  }

  if (!teacherName || !groupName) {
    return res.send("data toliq emas");
  }

  if (teacherName.length > 100 || groupName.length > 50) {
    return res.send("teacherName yoki groupName juda uzun");
  }

  req.group = { teacherName, groupName };

  next();
};
