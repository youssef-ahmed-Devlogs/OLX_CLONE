// START HEADER SECTION
const userIcon = document.querySelector(".user-icon");
const userSettingsList = document.querySelector(".user-settings-list");
let isUserListOpen = false;
const notificationIcon = document.querySelector(".notification-icon");
const notificationsSettingsList = document.querySelector(
  ".notifications-settings-list"
);
let isNotiListOpen = false;

userIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isUserListOpen) {
    userSettingsList.style.display = "none";
    isUserListOpen = false;
  } else {
    userSettingsList.style.display = "block";
    isUserListOpen = true;
  }

  notificationsSettingsList.style.display = "none";
  isNotiListOpen = false;
});

userSettingsList.addEventListener("click", (e) => e.stopPropagation());

notificationIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isNotiListOpen) {
    notificationsSettingsList.style.display = "none";
    isNotiListOpen = false;
  } else {
    notificationsSettingsList.style.display = "block";
    isNotiListOpen = true;
  }

  userSettingsList.style.display = "none";
  isUserListOpen = false;
});

notificationsSettingsList.addEventListener("click", (e) => e.stopPropagation());

window.addEventListener("click", (e) => {
  userSettingsList.style.display = "none";
  isUserListOpen = false;

  notificationsSettingsList.style.display = "none";
  isNotiListOpen = false;
});

// END HEADER SECTION

// START SWIPER CONF
if (document.querySelector(".swiper") != null) {
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

  // Swiper Conf for many cards
  function swiperConf(slidesPerView, selector) {
    var swiper = new Swiper(selector, {
      slidesPerView: slidesPerView,
      spaceBetween: 30,
      lazy: true,

      // breakpoints: {
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 5,
      //     spaceBetween: 50,
      //   },
      // },
    });
  }

  swiperBigView(".home__slider");
  // Swiper Conf one big view
  function swiperBigView(selector) {
    var swiper = new Swiper(selector, {
      lazy: true,
      navigation: {
        nextEl: `${selector}-next`,
        prevEl: `${selector}-prev`,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        el: `${selector}-pagination`,
      },
    });
  }
}

// END SWIPER CONF

// fancy box
if (document.querySelector(".fancy-gallery") != null) {
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
}
