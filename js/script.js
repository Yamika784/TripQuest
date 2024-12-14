"use strict";
let btn = document.querySelector(".header__btn");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav ul li a");


btn.addEventListener("click", function() {
    btn.classList.toggle("open");
    for (let i = 0; i < lines.length; i++){
        lines[i].classList.toggle("open");
    }
    nav.classList.toggle("open");

})

// / ナビゲーションリンクをクリックしたとき、メニューを閉じる
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        btn.classList.remove("open");
        lines.forEach(line => line.classList.remove("open"));
        nav.classList.remove("open");
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  });
  

  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 1000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
  
  // WideWater Animation
  function wideWaterAnimation () {
    $('.wideWaterDrop').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 10 ) {
        $(this).addClass('wideWaterDrop_animation');
      }
      else {
        $(this).removeClass('wideWaterDrop_animation');
      }
    });
  }

  $(window).scroll(function(){
    wideWaterAnimation();
  })

  // Slide Up Animation
  function slideUpAnimation () {
    $('.slideUpAnimation').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    slideUpAnimation();
  })

   // About List Animation
  function aboutListAnimation () {
    $('#about').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    aboutListAnimation();
  })


  // TQ_description Animation
  function TQ_descriptionAnimation () {
    $('#TQ_description').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20) {
        $(this).addClass('TQ_description_Animation');
      }
      else {
        $(this).removeClass('TQ_description_Animation');
      }
    });
  }

  $(window).scroll(function(){
    TQ_descriptionAnimation();
  })


  // TQ_description_inner Animation
  function TQ_description_innerAnimation () {
    $('.TQ_description_inner').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('TQ_description_inner_Animation');
      }
      else {
        $(this).removeClass('TQ_description_inner_Animation');
      }
    });
  }

  $(window).scroll(function(){
    TQ_description_innerAnimation();
  })

  // QuestList_Intro Animation
  function questList_IntroAnimation () {
    $('.questList_Intro').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('questList_Intro_Animation');
      }
      else {
        $(this).removeClass('questList_Intro_Animation');
      }
    });
  }

  $(window).scroll(function(){
    questList_IntroAnimation();
  })

  // QuestList_Intro_Inner Animation
  function questList_Intro_InnerAnimation () {
    $('.questList_Intro_inner').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('questList_Intro_inner_Animation');
      }
      else {
        $(this).removeClass('questList_Intro_inner_Animation');
      }
    });
  }

  $(window).scroll(function(){
    questList_Intro_InnerAnimation();
  })

  // TQserviceBtn Animation
  function TQserviceBtnAnimation () {
    $('.TQserviceBtn').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('TQserviceBtn_Animation');
      }
      else {
        $(this).removeClass('TQserviceBtn_Animation');
      }
    });
  }

  $(window).scroll(function(){
    TQserviceBtnAnimation();
  })

  