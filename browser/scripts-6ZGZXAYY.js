(function(t){"use strict";var e=function(){setTimeout(function(){t("#spinner").length>0&&t("#spinner").removeClass("show")},1)};e(0),new WOW().init(),t(".testimonial-carousel").owlCarousel({autoplay:!0,items:1,smartSpeed:1500,dots:!0,dotsData:!0,loop:!0,margin:25,nav:!0,navText:['<i class="bi bi-arrow-left"></i>','<i class="bi bi-arrow-right"></i>']}),t('[data-toggle="counter-up"]').counterUp({delay:5,time:2e3}),t(window).scroll(function(){t(this).scrollTop()>300?t(".back-to-top").fadeIn("slow"):t(".back-to-top").fadeOut("slow")}),t(".back-to-top").click(function(){return t("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})})(jQuery);
