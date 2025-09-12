$(document).ready(function () {
  // Navbar Fixed
  var header = $("header");
  var fixedNav = header.offset().top;
  // Go To Top
  var toTop = $("#to-top");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > fixedNav) {
      header.addClass("navbar-fixed");
      toTop.removeClass("hidden").addClass("flex");
    } else {
      header.removeClass("navbar-fixed");
      toTop.removeClass("flex").addClass("hidden");
    }
  });

  // Hamburger and nav
  var hamburger = $("#hamburger");
  var navMenu = $("#nav-menu");

  hamburger.on("click", function () {
    $(this).toggleClass("hamburger-active");
    navMenu.toggleClass("hidden");
  });

  // klik diluar hamburger
  $(document).on("click", function (e) {
    if (
      !hamburger.is(e.target) &&
      !navMenu.is(e.target) &&
      navMenu.has(e.target).length === 0
    ) {
      hamburger.removeClass("hamburger-active");
      navMenu.addClass("hidden");
    }
  });

  // Dark Mode Toggle
  var darkToggle = $("#dark-toggle");
  var html = $("html");

  darkToggle.on("click", function () {
    if ($(this).is(":checked")) {
      html.addClass("dark");
      localStorage.theme = "dark";
    } else {
      html.removeClass("dark");
      localStorage.theme = "light";
    }
  });

  // pindahkan posisi toggle sesuai mode
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    darkToggle.prop("checked", true);
    html.addClass("dark");
  } else {
    darkToggle.prop("checked", false);
    html.removeClass("dark");
  }
});
