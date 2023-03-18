// Elements
const elSiteNav = document.querySelector("[data-sitenav]");
const elNavToggler = document.querySelector("[data-nav-toggler]");

elNavToggler.addEventListener("click", (evt) => {
  navToggle();
  evt.stopPropagation();
});

document.addEventListener("click", navOutsideClick);

function navToggle() {
  if (elSiteNav.classList.contains("show")) {
    elSiteNav.classList.remove("show");
  } else {
    elSiteNav.classList.add("show");
  }
}

function navOutsideClick(evt) {
  const el = evt.target;

  if (el.matches("[data-sitenav]")) return;

  elSiteNav.classList.remove("show");
}
