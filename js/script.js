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
      var position = target.offset().top - 20;
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

  // Quest_info H2 Animation
  function Quest_infoH2Animation () {
    $('.Quest_info h2 ').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 20 ) {
        $(this).addClass('slideDown');
      }
      else {
        $(this).removeClass('slideDown');
      }
    });
  }

  $(window).scroll(function(){
    Quest_infoH2Animation();
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

   // About Info Animation
   function aboutInfoAnimation () {
    $('.aboutInfo h2, .aboutInfo p').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 10 ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    aboutInfoAnimation();
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

  // Water Ripple Animation 
  function waterRippleAnimation () {
    $('.waterRipple, .waterRipple2, .waterRipple3').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight + 10 ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    waterRippleAnimation();
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

  // How To Use Section Animation
  function HowtoUse_ContainerTitle () {
    $('.HowtoUse_Container').each(function(){
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
    HowtoUse_ContainerTitle();
  })


  // swiperAnimation Animation
  function swiperAnimation () {
    $('.swiper-slide').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('swiperAnimation');
      }
      else {
        $(this).removeClass('swiperAnimation');
      }
    });
  }

  $(window).scroll(function(){
    swiperAnimation();
  })

  //questListBtnAnimation
  function questListBtnAnimation() {
    $('.questListBtn').each(function () {
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
  
      if (scroll > position - windowHeight) {
        $(this).addClass('questListBtnAnimation');
      } else {
        $(this).removeClass('questListBtnAnimation');
      }
    });
  }
  
  $(window).scroll(function () {
    questListBtnAnimation();
  });

    //quest_DescriptionH3_Animation
  function quest_DescriptionH3_Animation () {
    $('.quest_Description h3').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    quest_DescriptionH3_Animation();
  })


    //quest_Description Container Animation 
  function quest_DescriptionAnimation () {
    $('.quest_Description').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    quest_DescriptionAnimation();
  })

  
    //quest_Description_figure_img_Animation
  function quest_Description_figure_img_Animation () {
    $('.quest_Description figure img').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    quest_Description_figure_img_Animation();
  })

  // quest_Description_figure_p_Animation
  function quest_Description_figure_p_Animation () {
    $('.quest_Description figure p').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }


  $(window).scroll(function(){
    quest_Description_figure_p_Animation();
  })

  // Quest_info_container Animation
  function Quest_info_containerAnimation () {
    $('.Quest_info_container').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  
  $(window).scroll(function(){
    Quest_info_containerAnimation();
  })

  // Spot_Info_title Animation
  function Spot_Info_title () {
    $('.Spot_Info_title').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideDown');
      }
      else {
        $(this).removeClass('slideDown');
      }
    });
  }

  $(window).scroll(function(){
    Spot_Info_title();
  })

  // quest_Description_figure_p_Animation
  function Spot_Info_figure_Animation () {
    $('.Spot_Info figure').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    Spot_Info_figure_Animation();
  })

  // clear_Requirement h4 Animation
  function clear_Requirement_h4_Animation () {
    $('.clear_Requirement h4').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideDown');
      }
      else {
        $(this).removeClass('slideDown');
      }
    });
  }

  $(window).scroll(function(){
    clear_Requirement_h4_Animation();
  })

  // clear_Requirement figure Animation
  function clear_Requirement_figure_Animation () {
    $('.clear_Requirement figure').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    clear_Requirement_figure_Animation();
  })

  // Quest Peek  (Have a Peek of Quest )Animation
  function QuestPeek_Animation () {
    $('.questPeek p').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideLeft');
      }
      else {
        $(this).removeClass('slideLeft');
      }
    });
  }

  $(window).scroll(function(){
    QuestPeek_Animation();
  })

  // Quest Peek  (Have a Peek of Quest )Animation
  function QuestPeekImg_Animation () {
    $('.questPeek img, .TQQuestPageBtn_container').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    QuestPeekImg_Animation();
  })

  // banner_Button Animation
  function banner_Button_Animation () {
    $('.banner_Button').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    banner_Button_Animation();
  })

  // Share_Container Animation
  function share_Container_Animation () {
    $('.share_Container').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('slideUp');
      }
      else {
        $(this).removeClass('slideUp');
      }
    });
  }

  $(window).scroll(function(){
    share_Container_Animation();
  })

  // Footer Back2TopBtn,  Animation
  function FooterElements_Animation () {
    $('.footer_TQ_Logo, .BackToTop_Button').each(function(){
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if ( scroll > position - windowHeight ) {
        $(this).addClass('popAnimation');
      }
      else {
        $(this).removeClass('popAnimation');
      }
    });
  }

  $(window).scroll(function(){
    FooterElements_Animation();
  })

