// // Navbar Fixed
// window.onscroll = () => {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.scrollY > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// //hamburger and nav
// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

$(document).ready(function () {
  // Navbar Fixed
  var header = $("header");
  var fixedNav = header.offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > fixedNav) {
      header.addClass("navbar-fixed");
    } else {
      header.removeClass("navbar-fixed");
    }
  });

  // Hamburger and nav
  var hamburger = $("#hamburger");
  var navMenu = $("#nav-menu");

  hamburger.on("click", function () {
    $(this).toggleClass("hamburger-active");
    navMenu.toggleClass("hidden");
  });

  // Dark mode toggle
  var html = $("html");
  var darkToggle = $("#dark-toggle");

  // cek localStorage
  if (localStorage.theme === "dark") {
    html.addClass("dark");
  }

  // dark mode toggle
  darkToggle.on("click", function () {
    html.toggleClass("dark");

    if (html.hasClass("dark")) {
      localStorage.theme = "dark";
      console.log("dark");
    } else {
      localStorage.theme = "light";
      console.log("light");
    }
  });
});
