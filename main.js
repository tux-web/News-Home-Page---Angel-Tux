const btnMenu = document.querySelector(".header__open-menu");
const menu = document.querySelector(".nav");
const btnCloseMenu = document.querySelector(".nav__close-menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("nav--abierto");
})
btnCloseMenu.addEventListener("click", () => {
    menu.classList.toggle("nav--abierto");
})