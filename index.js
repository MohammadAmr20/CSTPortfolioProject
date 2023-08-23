const toggleMenu = document.getElementById("toggle-menu");
const menu = document.querySelector("header .container nav .toggle-menu + ul");
const header = document.querySelector("header");
const navanchor = document.querySelectorAll("header .container nav ul a");
const sections = document.querySelectorAll(".sections");
console.log(toggleMenu);
toggleMenu.addEventListener("click", () => {
  if (toggleMenu.style.display != "none") {
    if (!menu.classList.contains("mobile-view-menu"))
      menu.classList.add("mobile-view-menu");
    else menu.classList.remove("mobile-view-menu");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) menu.classList.remove("mobile-view-menu");
});

function clearClicked() {
  for (let i = 0; i < navanchor.length; i++)
    navanchor[i].classList.remove("active");
}

window.onscroll = () => {
  if (window.scrollY >= 10) {
    header.style.backgroundColor = "rgb(0,0,0)";
  } else {
    header.style.backgroundColor = "transparent";
  }
  clearClicked();
  for (let i = 0; i < sections.length; i++) {
    let rect = sections[i].getBoundingClientRect();
    if (window.scrollY >= rect.top) {
      if (i) navanchor[i - 1].classList.remove("active");
      navanchor[i].classList.add("active");
    }
  }
};
