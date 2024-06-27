//
function changeBorderColor() {
  const tool = document.querySelector(".ToolsNavItem .tool");
  tool.style.border = "2px solid #ee6c4d";
  tool.style.color = "#ee6c4d";
}

function resetBorderColor() {
  const tool = document.querySelector(".ToolsNavItem .tool");
  tool.style.border = "2px solid #4d4c4c";
  tool.style.color = "#333333";
}
// loader
var loader = function () {
  setTimeout(function () {
    var loaderElem = document.getElementById("loader");
    if (loaderElem !== null) {
      loaderElem.classList.remove("show");
    }
  }, 1);
};
loader();

window.addEventListener("scroll", function () {
  var backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

document.querySelector(".back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sticky Navbar
// window.addEventListener("scroll", function () {
//   var navBar = document.querySelector(".navbar");
//   var heroSection = document.querySelector(".slider_section");

//   if (window.pageYOffset > 90) {
//     navBar.classList.add("sticky");
//     heroSection.classList.add("heroPage");
//   } else {
//     navBar.classList.remove("sticky");
//     heroSection.classList.remove("heroPage");
//   }
// });

// Dropdown on mouse hover
function toggleNavbarMethod() {
  var navbarDropdowns = document.querySelectorAll(".navbar .dropdown");
  navbarDropdowns.forEach(function (dropdown) {
    var timeoutIn;
    var timeoutOut;
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");
    dropdown.addEventListener("mouseover", function () {
      clearTimeout(timeoutOut);
      timeoutIn = setTimeout(function () {
        dropdownMenu.classList.add("show");
      }, 100);
    });
    dropdown.addEventListener("mouseout", function (event) {
      clearTimeout(timeoutIn);
      timeoutOut = setTimeout(function () {
        if (!dropdown.contains(event.relatedTarget)) {
          dropdownMenu.classList.remove("show");
        }
      }, 300);
    });

    dropdownMenu.addEventListener("mouseover", function () {
      clearTimeout(timeoutOut);
    });
    dropdownMenu.addEventListener("mouseout", function (event) {
      clearTimeout(timeoutIn);
      timeoutOut = setTimeout(function () {
        if (!dropdown.contains(event.relatedTarget)) {
          dropdownMenu.classList.remove("show");
        }
      }, 100);
    });
  });
}

toggleNavbarMethod();
window.addEventListener("resize", toggleNavbarMethod);

// Main carousel
var mainCarousel = document.querySelector(".carousel .owl-carousel");
if (mainCarousel !== null) {
  var mainCarouselOptions = {
    autoplay: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    smartSpeed: 300,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
  };
  $(mainCarousel).owlCarousel(mainCarouselOptions);
}

// Facts counter
var counterUpElements = document.querySelectorAll('[data-toggle="counter-up"]');
if (counterUpElements.length > 0) {
  counterUpElements.forEach(function (element) {
    $(element).counterUp({
      delay: 10,
      time: 2000,
    });
  });
}

// Testimonials carousel
var testimonialsCarousel = document.querySelector(".testimonials-carousel");
if (testimonialsCarousel !== null) {
  var testimonialsCarouselOptions = {
    center: true,
    autoplay: true,
    smartSpeed: 2000,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };
  $(testimonialsCarousel).owlCarousel(testimonialsCarouselOptions);
}

// Related post carousel
var relatedSlider = document.querySelector(".related-slider");
if (relatedSlider !== null) {
  var relatedSliderOptions = {
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };
  $(relatedSlider).owlCarousel(relatedSliderOptions);
}

$(document).ready(function () {
  var owl = $(".testimonials-carousel");
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Custom Navigation Buttons
  $(".testimonial-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".testimonial-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

// Modal
