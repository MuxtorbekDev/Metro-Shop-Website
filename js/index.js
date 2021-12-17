function hoverTop(hover, item) {
  const hoverItem = document.querySelector(hover);
  const topItem = document.querySelector(item);

  hoverItem.addEventListener("mousemove", () => {
    topItem.classList.add("block");
  });

  hoverItem.addEventListener("mouseout", () => {
    topItem.classList.remove("block");
  });
}
hoverTop("header nav ul li:nth-child(1)", "header nav ul li .home-items");
hoverTop("header nav ul li:nth-child(3)", "header nav ul li .pages-items");
hoverTop("header nav ul li:nth-child(5)", "header nav ul li .blog-items");
hoverTop("header nav ul li:nth-child(4)", "header nav ul li .elem-items");
hoverTop("header nav ul li:nth-child(2)", "header nav ul li .shop-items");
hoverTop(
  "header nav ul li .elem-items .post",
  ".elem-items  .row div .post .post-items"
);

// Categories toggle

const catIcon = document.querySelector("header .search .categories i");
const catMenu = document.querySelector("header .search .categories .menu");

catIcon.addEventListener("click", () => {
  catMenu.classList.toggle("block");
  catIcon.classList.toggle("bx-x");
});
//

// Menu

const navMenuIcon = document.querySelector("header nav ul li.menu-btn i");
const navMenu = document.querySelector("header nav .nav-menu");
navMenuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("block");
  navMenuIcon.classList.toggle("bx-x");
});
AOS.init();

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function hoverBottomAdd(hover, bottom, text) {
  const hoverBlock = document.querySelector(hover);
  const bottomAdd = document.querySelector(bottom);
  const textSection = document.querySelector(text);

  hoverBlock.addEventListener("mousemove", () => {
    bottomAdd.classList.add("bottom3");
    textSection.classList.add("bottom2");
  });

  hoverBlock.addEventListener("mouseout", () => {
    bottomAdd.classList.remove("bottom3");
    textSection.classList.remove("bottom2");
  });
}

hoverBottomAdd(".featured .game", ".game .text button", ".game .text");
hoverBottomAdd(".featured .keybo", ".keybo .text button", ".keybo .text");
hoverBottomAdd(".featured .speaker", ".speaker .text button", ".speaker .text");
hoverBottomAdd(
  ".featured .headphone",
  ".headphone .text button",
  ".headphone .text"
);
hoverBottomAdd(".featured .ultra", ".ultra .text button", ".ultra .text");
hoverBottomAdd(".featured .gadg", ".gadg .text button", ".gadg .text");
hoverBottomAdd(".featured .graph", ".graph .text button", ".graph .text");
hoverBottomAdd(".featured .bluet", ".bluet .text button", ".bluet .text");
hoverBottomAdd(".featured .habby", ".habby .text button", ".habby .text");
