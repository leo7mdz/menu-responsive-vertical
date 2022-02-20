const iconMenu = document.querySelector(".icon-bars"),
  menu = document.querySelector(".nav-bar");

document.addEventListener("click", (e) => {
  if (e.target.matches(".icon-bars *")) {
    menu.classList.toggle("nav-bar-active");
    iconMenu.classList.toggle("active");
  }
});
