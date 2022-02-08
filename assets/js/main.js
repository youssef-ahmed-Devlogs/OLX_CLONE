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

// START SWIPER CONF

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    swiperConf(1, ".last-one");
    swiperConf(1, ".first-one");
  } else if (window.innerWidth <= 991) {
    swiperConf(2, ".last-one");
  } else if (window.innerWidth <= 1199) {
    swiperConf(3, ".last-one");
    swiperConf(2, ".first-one");
  } else {
    swiperConf(4, ".last-one");
    swiperConf(3, ".first-one");
  }
});

if (window.innerWidth <= 600) {
  swiperConf(1, ".last-one");
  swiperConf(1, ".first-one");
} else if (window.innerWidth <= 991) {
  swiperConf(2, ".last-one");
} else if (window.innerWidth <= 1199) {
  swiperConf(3, ".last-one");
  swiperConf(2, ".first-one");
} else {
  swiperConf(4, ".last-one");
  swiperConf(3, ".first-one");
}

function swiperConf(slidesPerView, selector) {
  var swiper = new Swiper(selector, {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  });
}

// END SWIPER CONF

// fancy box

Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: true,

  caption: function (fancybox, carousel, slide) {
    let caption = slide.caption;

    return (
      (caption.length ? caption + "<br />" : "") +
      "Image " +
      (slide.index + 1) +
      " of " +
      carousel.pages.length
    );
  },
});
