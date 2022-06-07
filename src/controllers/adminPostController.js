const { read, write } = require("../utils/FS");

const POST_STUDENT = (req, res) => {
  try {
    const { groupId, username, password, role } = req.student;
    const allUsers = read("users.json");
    const id = allUsers[allUsers.length - 1].id + 1 || 1;

    allUsers.push({ id, groupId, username, password, role });

    write("users.json", allUsers);

    res.redirect("/admin");
  } catch (err) {
    throw new Error(err);
  }
};

const POST_COURSE = (req, res) => {
  try {
    const { course } = req;
    const allCourses = read("courses.json");
    course.id = allCourses[allCourses?.length - 1].id + 1 || 1;
    allCourses.push({
      id: course.id,
      courseName: course.courseName,
      price: course.price,
    });
    write("courses.json", allCourses);

    res.redirect("/admin");
  } catch (err) {
    throw new Error(err);
  }
};

const POST_GROUP = (req, res) => {
  try {
    const { group } = req;
    const allGroup = read("group.json");
    group.id = allGroup[allGroup?.length - 1].id + 1 || 1;
    allGroup.push({
      id: group.id,
      teacherName: group.teacherName,
      groupName: group.groupName,
    });
    write("group.json", allGroup);

    res.redirect("/admin");
  } catch (err) {
    throw new Error(err);
  }
};

const POST_TEACHER = (req, res) => {
  try {
    const { username, password, courseId } = req.teacher;
    const allUsers = read("users.json");
    const id = allUsers[allUsers?.length - 1].id + 1 || 1;
    allUsers.push({
      id,
      username,
      password,
      role: "teacher",
      courseId: courseId - 0,
    });
    write("users.json", allUsers);

    res.redirect("/admin");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  POST_STUDENT,
  POST_COURSE,
  POST_GROUP,
  POST_TEACHER,
};
