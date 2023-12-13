"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Offcanvas Menu
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

    //* Navbar Fixed
    var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);
  var nav_offset_top = $("header").height() + 20;
  function navbarFixed() {
    if ($(".header-section").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-section").addClass("sticked");
        } else {
          $(".header-section").removeClass("sticked");
        }
      });
    }
  }
  navbarFixed();

  /**
   * Sticky header on scroll
   */
  // const selectHeader = document.querySelector("#header");
  // if (selectHeader) {
  //   document.addEventListener("scroll", () => {
  //     window.scrollY > 50
  //       ? selectHeader.classList.add("sticked")
  //       : selectHeader.classList.remove("sticked");
  //   });
  // }
  /**
   * Sticky header on scroll
   */
  // const selectOffcanvas = document.querySelector("#offcanvas");
  // if (selectOffcanvas) {
  //   document.addEventListener("scroll", () => {
  //     window.scrollY > 100
  //       ? selectOffcanvas.classList.add("sticked")
  //       : selectOffcanvas.classList.remove("sticked");
  //   });
  // }

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
        Hero Slider
    --------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 4000,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });

  /*------------------------
		Testimonial Slider
    ----------------------- */
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 4000,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
  });

  /*------------------
        Magnific Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
		Date Picker
	--------------------*/
  $(".date-input").datepicker({
    minDate: 0,
    dateFormat: "dd MM, yy",
  });

  /*------------------
		Nice Select
	--------------------*/
  $("select").niceSelect();
})(jQuery);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  smartSpeed:5000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
