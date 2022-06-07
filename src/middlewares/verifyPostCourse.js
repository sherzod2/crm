const { read } = require("../utils/FS");

module.exports = (req, res, next) => {
  const { courseName, price } = req.body;
  const { user } = req;
  const foundCourse = read("courses.json")?.find(
    (item) => item.courseName == courseName
  );

  if (foundCourse)
    return res.send("bunday courseName ostidagi course allaqachon mavjud"); //dhwujdhu
  if (user.role != "admin") {
    return res.redirect("/login");
  }

  if (!courseName || !price) {
    return res.send("data toliq emas");
  }

  if (courseName.length > 100 || price.length > 50) {
    return res.send("courseName yoki price juda uzun price dollarda");
  }

  req.course = { courseName, price };

  next();
};
