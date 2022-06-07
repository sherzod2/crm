const { read, write } = require("../utils/FS");

const GET = (req, res) => {
  try {
    const { user } = req;

    if (user.role == "admin") {
      const allCourses = read("courses.json");
      const allUsers = read("users.json");
      const allteachers = allUsers?.filter((user) => {
        if (user.role == "teacher") {
          user.course = allCourses?.find(
            (course) => course.id == user?.courseId
          );
          return user;
        } else return null;
      });

      const allGroups = read("group.json")?.map((group) => {
        const foundTeacher = allteachers?.find(
          (teacher) => teacher.username == group.teacherName
        );
        group.course = allCourses?.find(
          (item) => item.id == foundTeacher?.courseId
        );
        return group;
      });

      const allStudents = allUsers
        ?.filter((user) => user.role == "student")
        .map((user) => {
          user.groups = allGroups?.filter((group) =>
            user.groupId.includes(group.id)
          );

          return user;
        });

      res.render("index", {
        students: allStudents,
        groups: allGroups,
        teachers: allteachers,
        courses: allCourses,
      });
    } else {
      res.redirect("/login");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const DELETE_STUDENT = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.send("id not found");

    const allUser = read("users.json");
    const foundIndex = allUser?.findIndex((user) => user.id == id);

    if (foundIndex >= 0) {
      allUser.splice(foundIndex, 1);

      write("users.json", allUser);

      return res.send("OK");
    } else {
      return res.send("cannot delete student");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const DELETE_TEACHER = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.send("id not found");

    const allUser = read("users.json");
    const foundIndex = allUser?.findIndex((user) => user.id == id);

    if (foundIndex >= 0) {
      allUser.splice(foundIndex, 1);

      write("users.json", allUser);

      return res.send("OK");
    } else {
      return res.send("cannot delete teacher");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const DELETE_GROUP = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.send("id not found");

    const allGroups = read("group.json");
    const foundIndex = allGroups?.findIndex((group) => group.id == id);

    if (foundIndex >= 0) {
      allGroups.splice(foundIndex, 1);

      write("group.json", allGroups);

      return res.send("OK");
    } else {
      return res.send("cannot delete group");
    }
  } catch (err) {
    throw new Error(err);
  }
};

const DELETE_COURSE = (req, res) => {
  try {
    const { id } = req.params;

    if (!id) return res.send("id not found");

    const allCourses = read("courses.json");
    const foundIndex = allCourses?.findIndex((course) => course.id == id);

    if (foundIndex >= 0) {
      allCourses.splice(foundIndex, 1);

      write("courses.json", allCourses);

      return res.send("OK");
    } else {
      return res.send("cannot delete course");
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  GET,
  DELETE_STUDENT,
  DELETE_TEACHER,
  DELETE_GROUP,
  DELETE_COURSE,
};
