const { read, write } = require("../utils/FS");

const GET = (req, res) => {
  try {
    const { user } = req;

    if (user.role == "teacher") {
      const foundTeacher = read("users.json")?.find(
        (teacher) => teacher.username == user.username
      );

      foundTeacher.groups = read("group.json")?.filter(
        (group) => group.teacherName == foundTeacher.username
      );

      foundTeacher.course = read("courses.json")?.find(
        (course) => course.id == foundTeacher.courseId
      );

      res.render("teacher", { teacher: foundTeacher });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    teachers;
    throw new Error(err);
  }
};

const POST = (req, res) => {
  try {
    const { newTask } = req;
    const allHomeworks = read("homeworks.json");
    const foundHomework = allHomeworks?.find(
      (homework) => homework.groupId == newTask.groupId
    );
    foundHomework.title = newTask.title;
    foundHomework.desc = newTask.desc;
    write("homeworks.json", allHomeworks);
    res.redirect("/teacher");
  } catch (err) {
    teachers;
    throw new Error(err);
  }
};

module.exports = {
  GET,
  POST,
};
