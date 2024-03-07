//  Toggle Class Active hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

//  Ketika hamburger menu diklik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//  Toggle Class Active search form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

//  Toggle Class Active Shopping Cart

const shoppingCart = document.querySelector(".shopping-cart");

//  Ketika Shopping Cart Button diklik

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//  Ketika search menu diklik

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar elemen

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

//  Ketika hamburger menu diklik

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");

  if (!sb.contains(e.target) && !searchForm.contains(e.target))
    searchForm.classList.remove("active");
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target))
    shoppingCart.classList.remove("active");
});

// Modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
