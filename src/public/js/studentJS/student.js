const elNavItems = document.querySelectorAll(".nav__item");
const elAdminMains = document.querySelectorAll(".homework__card");
let index = 0;

if (!index) {
  for (let i = 0; i < elAdminMains.length; i++) {
    if (index == i) {
      elAdminMains[i].classList.remove("hidden");
    } else {
      elAdminMains[i].classList.add("hidden");
    }
  }
  index++;
}

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
