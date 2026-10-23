  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 170,
        },
      },
      slidesPerView: 4,
      spaceBetween: 170,
    });
  }

  if (document.querySelector(".experince-swiper")) {
    new Swiper(".experince-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (document.querySelector(".project-swiper")) {
    var projectSwiper = new Swiper(".project-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".project-swiper__controls .swiper-button-next, .project-swiper .swiper-button-next",
        prevEl: ".project-swiper__controls .swiper-button-prev, .project-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".project-swiper__controls .swiper-pagination, .project-swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".team-swiper")) {
    var teamSwiper = new Swiper(".team-swiper", {
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  if (document.querySelector(".brands-swiper")) {
    var brandsSwiper = new Swiper(".brands-swiper", {
      slidesPerView: 2,
      spaceBetween: 25,
      loop: true,
      speed: 900,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  }


  var swiper = new Swiper(".testimonials-swiper", {
    loop: true,

  });

  var swiper = new Swiper(".roadmap-swiper", {

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1450: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".roadmap-swiper3", {

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },

      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    freeMode: true,
  });


  var swiper = new Swiper(".testimonials-swiper.s2", {
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".project-swiper-3", {

    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    freeMode: true,
  });

  var swiper = new Swiper(".bannerSwiper", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 15,
        depth: 320,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },
  });


  var swiper = new Swiper(".cardSwiper", {
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },

    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 320,
        modifier: 0,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },

    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },
  });

  var swiper = new Swiper(".cardSwiper2", {
    loop: true,
    spaceBetween: -90,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },

    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 700,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".bannerSwiper3", {
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },


    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 300,
        depth: 220,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },
  });

  var swiper = new Swiper(".cardSwiper4", {
    loop: true,
    spaceBetween: -70,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },

    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: -190,
        depth:620,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".cardSwiper5", {
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 7,
      },

    },
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
        rotate: 25,
        stretch: 10,
        depth: 70,
        modifier: 1,
        slideShadows: false,
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next.s1",
      prevEl: ".swiper-button-prev.s1",
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });

  


  


  // var swiper = new Swiper(".testimonials-swiper", {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

  // var swiper = new Swiper(".project-swiper", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   loop: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });