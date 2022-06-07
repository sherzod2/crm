const express = require("express");
const router = express.Router();

// controllers
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");
const adminPostController = require("../controllers/adminPostController");
const studentController = require("../controllers/studentController");
const teacherController = require("../controllers/teacherController");
// middlewares
const verifyRole = require("../middlewares/verifyRole");
const verifyLogin = require("../middlewares/verifyLogin");
const verifyToken = require("../middlewares/verifyToken");
const verifyPostTask = require("../middlewares/verifyPostTask");
const verifyPostCourse = require("../middlewares/verifyPostCourse");
const verifyPostGroup = require("../middlewares/verifyPostGroup");
const verifyPostTeacher = require("../middlewares/verifyPostTeacher");
const verifyPostStudent = require("../middlewares/verifyPostStudent");

router
  .get("/login", verifyRole, loginController.GET)
  .post("/login", verifyLogin, loginController.POST)
  .get("/admin", verifyToken, adminController.GET)
  .get("/teacher", verifyToken, teacherController.GET)
  .post("/newTask", verifyPostTask, teacherController.POST)
  .post(
    "/newStudent",
    [verifyToken, verifyPostStudent],
    adminPostController.POST_STUDENT
  )
  .post(
    "/newCourse",
    [verifyToken, verifyPostCourse],
    adminPostController.POST_COURSE
  )
  .post(
    "/newGroup",
    [verifyToken, verifyPostGroup],
    adminPostController.POST_GROUP
  )
  .post(
    "/newTeacher",
    [verifyToken, verifyPostTeacher],
    adminPostController.POST_TEACHER
  )
  .get("/student", verifyToken, studentController.GET)
  .delete("/deleteStudent/:id", adminController.DELETE_STUDENT)
  .delete("/deleteTeacher/:id", adminController.DELETE_TEACHER)
  .delete("/deleteGroup/:id", adminController.DELETE_GROUP)
  .delete("/deleteCourse/:id", adminController.DELETE_COURSE);

module.exports = router;
