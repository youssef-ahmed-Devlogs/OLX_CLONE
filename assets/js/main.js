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

// START HOME SLIDER

swiperBigView(".home__slider");

// END HOME SLIDER

// START HOME PRODUCTS SLIDER

swiperConf(".latest__products", 4);
swiperConf(".top__products", 3);

// END HOME PRODUCTS SLIDER

// START AD DETAILS PAGE

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

swiperConf(".other__ads__seller", 3);
swiperConf(".another__products", 4);

// END AD DETAILS PAGE

// Swiper Conf for many cards

function swiperConf(selector, slidesPerView) {
  var swiper = new Swiper(selector, {
    lazy: true,
    navigation: {
      nextEl: `${selector}-next`,
      prevEl: `${selector}-prev`,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: `${selector}-pagination`,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: slidesPerView,
        spaceBetween: 20,
      },
    },
  });
}

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

// =============== //

const TitleHeading = document.getElementById("section__HedTitle");
const fancy_galeery = document.getElementById("fancy-gallery");
async function minpulateData() {
  const responses = await fetch("../data/data.json");
  const data = await responses.json();
  console.log(data[0].ads[0].details.model);
  TitleHeading.innerHTML = data[0].ads[0].details.model;
  data.forEach((item) => {
    const fancyBoxData = ` <div>
      <a
        data-fancybox="gallery"
        data-caption="Hello, World!"
        href="../assets/${item.ads[0].images[0]}"
      >
      <a
      data-fancybox="gallery"
      data-caption="pc"
      href="../assets/${item.ads[0].images[1]}"
    >
    <a
    data-fancybox="gallery"
    data-caption="Headphone"
    href="../assets/images/1.png"
  >
        <img
          src="../assets/images/1.png"
          class="main-img"
          alt=""
        />
      </a>
    </div> `;
    fancy_galeery.appendChild(fancyBoxData);
  });
}
minpulateData();
