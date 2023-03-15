const buttonDropdown = document.querySelector(".button-hamburguer");
const menuDropdown = document.querySelector(".dropdown-child");
const iconBars = document.querySelector("#button-bars")
const iconClose = document.querySelector("#button-close")
buttonDropdown.addEventListener("click", () => {
    menuDropdown.classList.toggle("dropdown-show");
    
    iconBars.classList.toggle("icon-button");
    iconClose.classList.toggle("icon-button");
    
});

const buttonbody = document.querySelector("main");
buttonbody.addEventListener("click", () => {
    menuDropdown.classList.remove("dropdown-show");

    iconBars.classList.remove("icon-button");
    iconClose.classList.add("icon-button");
});
