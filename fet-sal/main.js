import "./style.css";
import photosList from "./src/photosList";
import postComment from "./src/postComment";
import header from "./src/header";

const customerInfo = {
  name: "Erik Dunlop",
  location: "San Francisco, California",
  avatarImgId: "1062",
};

const previousComments = [
  "consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et",
];

header(customerInfo);
photosList(3);
postComment(previousComments);

document.addEventListener(
  "click",
  function (event) {
    if (!event.target.matches(".like-button")) return;

    const likeSvg = document.getElementById("like-button");

    if (likeSvg.classList.value === "like-button clicked") {
      likeSvg.classList.remove("clicked");
    } else {
      likeSvg.classList.add("clicked");
    }
  },
  false
);

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  allowTouchMove: false,
  effect: "slide",
  observer: true,
  observeParents: true,
  parallax: true,
  paginationClickable: ".swiper-pagination",

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    hideOnClick: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

    on: {
      init: function () {
        $(".left-arrow").show();
        $(".right-arrow").show();
      },
    },
  },
});
