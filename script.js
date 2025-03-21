document.querySelector("svg").onclick = function () {
  document.querySelector(".off-canvas").classList.toggle("hide");
};

function changeNavbarBg() {
  let navbar = document.getElementById("navbar");
  let navLinks = document.querySelectorAll(".nav-light-links li a");
  let navBrand = document.getElementById("logo");
  let scrollValue = window.scrollY;
  if (scrollValue < 80) {
    navbar.classList.remove("navbar-light");
    navBrand.src = "images/logo-light.png";
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#fff";
    }
  } else {
    navbar.classList.add("navbar-light");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "#000";
    }
    navBrand.src = "images/logo-dark.png";
  }
}

function hover() {
  let navLinks = document.querySelectorAll(".nav-light-links li a");
  let scrollValue = window.scrollY;
  navLinks.forEach((link) => {
    if (scrollValue < 80) {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f5af00";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#ffff";
      });
    } else {
      link.addEventListener("mouseover", () => {
        link.style.color = "#f5af00";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#000000";
      });
    }
  });
}

window.addEventListener("scroll", changeNavbarBg);
window.addEventListener("scroll", hover);
