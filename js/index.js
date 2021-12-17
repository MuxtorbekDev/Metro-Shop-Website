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
