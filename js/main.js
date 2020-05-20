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

  $(modalBtn).click(function () {
    modal.toggleClass('modal--visible');
  });
  
  $(closeBtn).click(function () {
    modal.toggleClass('modal--visible');
  });
  
  $(".modal").on('click', function (e) {
    
    if (e.target == this) {
      modal.toggleClass('modal--visible');
    }
  });


  $(window).on('keyup', function(e) {
    var key = e.keyCode;

      if (key == 27) {
        modal.toggleClass('modal--visible');
      }
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
  

  next.css('left', prev.width() + 19 + bullets.width() +19),
  bullets.css('left', prev.width() + 19);


 
  new WOW().init();

  // $(window).scroll(function (){
  //   $(' .card').each(function (){
  //       var elPos = $(this).offset().top;
  //       var topOfWindow = $(window).scrollTop();
  //       if (elPos < topOfWindow+550) {
  //           $(this).addClass('fadeInUp');
  //       }
  //   });
  // });

  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв",
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email"
      }
    }
  });

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв",
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email"
      }
    }
  });

  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв",
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email"
      }
    }
  });

  // маска для тел
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7(___)___-__-__"});

  // создание yandex карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
  }); 
});

 
