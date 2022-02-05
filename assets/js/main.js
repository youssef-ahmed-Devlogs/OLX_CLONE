<<<<<<< HEAD
// START HEADER SECTION
const userSettings = document.querySelector(".user-settings");
const userIcon = document.querySelector(".user-icon");
const userSettingsList = document.querySelector(".user-settings-list");
let isOpen = false;

userIcon.addEventListener("click", () => {
  if (isOpen) {
    userSettingsList.style.display = "none";
    isOpen = false;
  } else {
    userSettingsList.style.display = "block";
    isOpen = true;
  }
});

window.addEventListener("click", (e) => {
  if (e.target == userIcon) {
    console.log("OK");
  } else {
    console.log("No");
  }
});
// END HEADER SECTION
=======
// Start

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
>>>>>>> 72ca172b9bdcd9cfe7e04c4fccea078e7dbfafbe
