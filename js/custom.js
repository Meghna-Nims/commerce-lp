document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  let ticking = false;
  let lastKnownScroll = 0;

  if (header) {
    window.addEventListener("scroll", function () {
      lastKnownScroll = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          header.classList.toggle("fixed-header", lastKnownScroll > 100);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
if (window.jQuery) (function ($) {
    var $partner = $(".partner-slider");
    if ($partner.length) {
      $partner.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 1400,
        autoplayHoverPause: false,
        responsive: {
          0: { items: 4, margin: 20 },
          480: { items: 5, margin: 30 },
          768: { items: 7 },
          1024: { items: 7 },
          1400: { items: 7 }
        }
      });
    }
  })(jQuery);
});

document.addEventListener('DOMContentLoaded',function(){
  var row = document.querySelector('.grid-row');
  if(!row) return;
  function ensureStartVisible(){
    row.style.scrollBehavior = 'auto';
    row.scrollLeft = 0;
    setTimeout(function(){ row.scrollLeft = 0; row.style.scrollBehavior = ''; }, 60);
  }
  ensureStartVisible();
  window.addEventListener('orientationchange', ensureStartVisible);
  window.addEventListener('resize', ensureStartVisible);
  document.addEventListener('visibilitychange', function(){ if(!document.hidden) ensureStartVisible(); });
  row.addEventListener('touchstart', function(){ /* no-op to ensure touch triggers */ }, {passive:true});
});
document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.getElementById("applyNowBtn");
  const firstSection = document.querySelector(".hero-admission");
  const formPanel = document.querySelector(".right-form");

  function toggleButton() {
    const sectionBottom = firstSection.offsetTop + firstSection.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight;

    if (window.scrollY < sectionBottom - 120) {
      applyBtn.classList.remove("show");
    } else {
      applyBtn.classList.add("show");
    }
  }

  window.addEventListener("scroll", toggleButton);
  toggleButton();

  applyBtn.addEventListener("click", () => {
    if (formPanel) {
      formPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

//life at nims slider
$(".lifeatnims-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 700,
    dots: false,
    nav: false,
});



  // placements
  $('.placements-owl').owlCarousel({
    loop: true,
    margin: 40,
    center: true,
    nav: true,
    dots: false,
    
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,

    navText: [
      "<span class='owl-prev'>‹</span>",
      "<span class='owl-next'>›</span>"
    ],

    responsive: {
      0: {
        items: 1,
        center: false
      },
      768: {
        items: 2,
        center: false
      },
      1024: {
        items: 3,
        center: true
      }
    }
  });

  // HONOURS LOGO SLIDER 
  $('.honours-logos-owl').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 2, },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 8, loop: false, autoplay: false,}
    }
  });


  
