/*
document.addEventListener("DOMContentLoaded", function(event) { 

  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };

  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {
      modal.classList.toggle('modal--visible');
    }
  }, false);

});
*/


$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    upScroll = $('.scroll-up');

  // присваивает кнопке класс show
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      upScroll.addClass('show');
    } else {
      upScroll.removeClass('show');
    }
  });

  // скрипт плавной прокрутки
  $(document).on('click', '.scroll-up', function (e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
  });

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() +10),
  bullets.css('left', prev.width() + 10);

});

 
