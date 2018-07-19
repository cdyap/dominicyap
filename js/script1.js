(function($) {
  $('#footer form').css("opacity", 0);
  /* typed JS */
  $(function(){
      
  });

  $(function(){
      $("#home h4 span").typed({
        strings: ["misa.org.ph"],
        typeSpeed: 60,
        backspeed: 800,
        backDelay: 500,
        startDelay: 1000,
        callback: function() {
          $(".element1").typed({
            strings: ["See our fresh look."],
            typeSpeed: 10,
            backspeed: 800,
            backDelay: 500,
            startDelay:1000
          });
        }
      });
  });

  $(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $("#about-img").position().top - 200) {
      // $('#about-img').css('background', $("#about-img").attr("data-color"));
      $('.ani0').addClass('about-slideleft');
      setTimeout(function(){$('.ani1').addClass('about-slideleft')},200);
      setTimeout(function(){$('.ani2').addClass('about-slideleft')},400);
    };

    if ($(document).scrollTop() > $("#eservs").position().top - 500) {
      $('#eservs h5:first').addClass('about-slideright');
      $('#eservs h5:eq(1)').addClass('about-slideleft');
    };

    if ($(document).scrollTop() > $("#org-life").position().top - 500) {
      $('#org-life h2:first').addClass('about-slideright');
      setTimeout(function(){$('#org-life h2:eq(1)').addClass('about-slideright')},300);
      setTimeout(function(){$('#org-life h2:eq(2)').addClass('about-slideright')},600);
      setTimeout(function(){$('#org-life h2:eq(3)').addClass('about-slideright')},900);
    };

    if ($(document).scrollTop() > $("#eservs-services").position().top - 500) {
      $('.content').css('opacity', 1);
    };

    if ($(document).scrollTop() > $("#footer").position().top - 500) {
      $(".footerheader").typed({
        strings: ["Interested in<br>working with us?"],
        typeSpeed: 10
      });

      $(".downloadcatalogue").typed({
        strings: ["Download our <a href='Catalogue.pdf' target='new' download>catalogue</a>,^600<br>or shoot us an email."],
        typeSpeed: 10,
        startDelay: 2200,
        callback: function() {
          $('#footer form').css("opacity", 1);
        }
      });
      
    };    
  });

/**
		 * Initialize Nav
		 
		$(window).on('load scroll', function() {
			$(window).scrollTop() > 0
				? $('.navbar').removeClass('navbar-topsec')
				: $('.navbar').addClass('navbar-topsec');
		});*/

		/*$('.navbar-nav li a').click(function(e) {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  }
  e.preventDefault();
});

		/**
		 * Initialize go to top button
		 */
                /*$("#gotop-btn").on('click',function(e){
  e.preventDefault();
    $('html,body').animate({scrollTop:0},600);
    return false;
  });

                /*$("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });*/



$(window).load(function(){
// Cache selectors
var lastId,
    topMenu = $("#main-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    }),
    noScrollAction = false;
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+50;
    noScrollAction = true;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    },{
        duration: 300,
        complete: function() {
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=" + href +"]").parent().addClass("active");
            //location.hash = hash;
            setTimeout(function(){ noScrollAction = false; }, 10);
        }
    });
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   if(!noScrollAction){
       // Get container scroll position
       var fromTop = $(this).scrollTop()+topMenuHeight;
       
       // Get id of current scroll item
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
       // Get the id of the current element
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
           // Set/remove active class
           menuItems
             .parent().removeClass("active")
             .end().filter("[href=#"+id+"]").parent().addClass("active");
       }
   }    
});
});
       

$('form').submit(function(xx){
    xx.preventDefault(); 
    sendContactRequest();
    return false;
});

function sendContactRequest() {
    console.log($('form').serialize());
    $.ajax({
        url: 'php/contact-us.php',
                type: 'POST',
                data: $('form').serialize(),
                success: function(response) {

                    alert("Your email has been sent. Thank you " + name + "!");
                }
    });
}

})(jQuery);