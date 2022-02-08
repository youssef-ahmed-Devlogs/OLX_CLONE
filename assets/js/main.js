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

// Start
function lastSlider() {
  var swiper = new Swiper(".last-one", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
lastSlider();

function firstSlidr() {
  var swiper = new Swiper(".first-one", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
firstSlidr();

function resposive(slidesPerView, css) {}
