let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let registerForm = document.querySelector(".register-form-container");
let formClose = document.querySelector("#form-close");
let registerClose = document.querySelector("#register-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
let registerBtn = document.querySelector("#register-btn");
// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});
registerBtn.addEventListener("click", () => {
  registerForm.classList.toggle("active");
  loginForm.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
  
});
registerClose.addEventListener("click", () => {
  registerForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
ScrollReveal().reveal(".heading", {
  reset: true,
  delay: 400,
  distance: "100px",
  origin: "left",

  // interval: false,
});
ScrollReveal().reveal(".book .image", {
  reset: true,
  delay: 400,
  distance: "100px",
  origin: "bottom",

  // interval: false,
});
ScrollReveal().reveal(".book .form", {
  reset: true,
  delay: 400,

  origin: "right",
  distance: "100px",
});
ScrollReveal().reveal(".packages .box", {
  reset: true,
  delay: 500,

  origin: "right",
  distance: "100px",
  interval: 200,
});
ScrollReveal().reveal(".services", {
  reset: true,
  delay: 500,

  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(".gallery .box", {
  reset: true,
  delay: 500,

  origin: "bottom",
  distance: "100px",
  interval: 200,
});
ScrollReveal().reveal(".services .box", {
  reset: true,
  delay: 500,

  origin: "bottom",
  distance: "100px",
  interval: 200,
});
ScrollReveal().reveal(".review", {
  reset: true,
  delay: 700,

  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(".contact .image", {
  reset: true,
  delay: 400,
  rotate: {
    x: 90,
    y: 90,
    z: 180,
  },
  duration: 2500,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".contact .form", {
  reset: true,
  delay: 500,

  origin: "right",
  distance: "100px",
});

// class to create doubly linked list
