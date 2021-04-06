// last - work slider
$(document).ready(function () {
  $('.last-works__slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1236,
        settings: {
          slidesToShow: 3,
        }
      }
    ],
    mobileFirst: true,
  });
});

// feedback slider
$(document).ready(function () {
  $('.feedback-slider').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,

        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          dots: false
        }
      },
    ],
    mobileFirst: true,
  });
});


// footer - dropdown
$(document).ready(function () {
  $('.details__title').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
  })
});


//показ суб-меню
let menuArrows = document.querySelectorAll('.nav__arrow')
if (menuArrows.length > 0) {
  for (let i = 0; i < menuArrows.length; i++) {
    const menuArrow = menuArrows[i];
    menuArrow.addEventListener("click", function (e) {
      menuArrow.parentElement.classList.toggle('._active');
    });
  }
}

//  меню
const iconMenu = document.querySelector('.burger');
if (iconMenu) {
  const nav = document.querySelector('.nav')
  const navigationBar = document.querySelector('.navigation-bar')
  iconMenu.addEventListener("click", function (e) {
    // iconMenu.classList.toggle('._active');//для анімації іконки
    nav.classList.toggle('._active');
    navigationBar.classList.toggle('._active');
  })
}

const callBtn = document.querySelector('.call-btn');
if (callBtn) {
  const contact = document.querySelector('.call-btn__contact');
  callBtn.addEventListener('click', function (e) {
    contact.classList.toggle('._active');
  })
}

function email_test(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


