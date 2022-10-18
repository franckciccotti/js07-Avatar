
const menu = document.querySelector(".menu");
const avatar = document.querySelector(".profil img");

avatar.addEventListener("mouseover", () => {
  menu.classList.add("active");
});

avatar.addEventListener("mouseout", () => {
  menu.classList.remove("active");
});

menu.addEventListener("mouseover", () => {
  menu.classList.add("active");
});

menu.addEventListener("mouseout", () => {
  menu.classList.remove("active");
});