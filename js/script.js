$(document).ready(function() {
  $('#footer form').css("opacity", 0);
  $('.element').text("");
  /* typed JS */
  $(function(){
      $(".element").typed({
        strings: ["Form.^800 Inform.^800 Transform."],
        typeSpeed: 30,
        backspeed: 800,
        startDelay: 800
      });
  });

  $('form').submit(function(xx){
    xx.preventDefault(); 
    sendContactRequest();
    return false;
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
        typeSpeed: 3
      });

      $(".downloadcatalogue").typed({
        strings: ["Download our <a href='Catalogue.pdf' target='new' download>catalogue</a>,^600<br>or shoot us an email."],
        typeSpeed: 3,
        startDelay: 1900,
        callback: function() {
          $('#footer form').css("opacity", 1);
        }
      });
      
    };    
  });


});

  

function sendContactRequest() {
    // console.log($('form').serialize());
    $.ajax({
        url: 'php/contact-us.php',
                type: 'POST',
                data: $('form').serialize(),
                success: function(response) {
                    alert("Your email has been sent. Thank you " + name + "!");
                }
    });
}


       


