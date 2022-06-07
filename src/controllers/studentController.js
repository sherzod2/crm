const { read } = require("../utils/FS");

const GET = (req, res) => {
  try {
    const { user } = req;

    if (user.role == "student") {
      const foundStudent = read("users.json")?.find(
        (student) => student.username == user.username
      );

      const foundGroups = read("group.json")?.filter((group) =>
        foundStudent.groupId.includes(group.id)
      );

      const allHomeworks = read("homeworks.json");

      for (let i = 0; i < foundGroups.length; i++) {
        foundGroups[i].homework = allHomeworks?.find(
          (homework) => homework.groupId == foundGroups[i].id
        );
      }

      foundStudent.groups = foundGroups;

      res.render("student", { student: foundStudent });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  GET,
};
