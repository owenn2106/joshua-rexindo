const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation

    burger.classList.toggle("toggle");
  });
};

navSlide();

$(".nav-links li").click(function () {
  if (!$(".burger").is(":visible")) {
    return null;
  } else {
    $(".burger").click();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).ready(function () {
    var $nav = $("nav");
    setTimeout(function () {
      $nav.removeClass("initialRender");
    }, 3500);
  });
});
