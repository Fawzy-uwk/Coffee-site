let navbar = document.querySelector(".nb");
document.querySelector("#bb").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  CartItem.classList.remove("active");
};

let searchForm = document.querySelector(".serach-form");
document.querySelector("#sb").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  CartItem.classList.remove("active");
};

let CartItem = document.querySelector(".cic");
document.querySelector("#scb").onclick = () => {
  CartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  CartItem.classList.remove("active");
};
