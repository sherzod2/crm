const elNavItems = document.querySelectorAll(".nav__item");
const elAdminMains = document.querySelectorAll(".main");
const elDeleteStudentBtn = document.querySelectorAll(".delete-student-btn");
const elDeleteTeacherBtn = document.querySelectorAll(".delete-teacher-btn");
const elDeleteGroupBtn = document.querySelectorAll(".delete-group-btn");
const elDeleteCourseBtn = document.querySelectorAll(".delete-course-btn");

elNavItems?.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    for (let i = 0; i < elAdminMains.length; i++) {
      if (index == i) {
        elAdminMains[i].classList.remove("hidden");
      } else {
        elAdminMains[i].classList.add("hidden");
      }
    }
  });
});

// DELETE STUDENT
elDeleteStudentBtn?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.dataset.name;
    if (id) {
      fetch(`http://localhost:7777/deleteStudent/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            window.location.href = window.location.href;
          }
        });
    }
  });
});

// DELETE TEACHER
elDeleteTeacherBtn?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      fetch(`http://localhost:7777/deleteTeacher/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) window.location.href("/login");
        });
    }
  });
});

// DELETE GROUP
elDeleteGroupBtn?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      fetch(`http://localhost:7777/deleteGroup/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) window.update();
        });
    }
  });
});

// DELETE COURSE
elDeleteCourseBtn?.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      fetch(`http://localhost:7777/deleteCourse/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            window.update();
          }
        });
    }
  });
});
