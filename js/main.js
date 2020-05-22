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
      userPhone: {
        required: true,
        minlength: 18
      },
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
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер в формате +7 (000) 000-00-00"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный Email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
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
      userPhone: {
        required: true,
        minlength: 18
      },
      userQuestion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер в формате +7 (000) 000-00-00"
      },
      userQuestion: {
        required: "Заполните поле",
        minlength: "Минимальноое кол-во символов - 10"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
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
      userPhone: {
        required: true,
        minlength: 18
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более 15 букв",
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Номер в формате +7 (000) 000-00-00"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });


  // маска для тел
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "Ваш номер телефона"});

  // создание yandex карты
   
});

 
