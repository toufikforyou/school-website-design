var pageloadar = document.getElementById('lodding');
function myFunsion(){
  pageloadar.style.display = 'none';
}
//for scroll function of menu or navbar
$(document).ready(function(){
    $("#drop-menu").on('click',function(){
      $("#school-menu").toggle();
    });

  $(window).scroll(function(){
    if($(window).scrollTop() > 100 ){
      $('#school-menu').addClass('scroll-menu');
    }else{
      $('#school-menu').removeClass('scroll-menu');
    }
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $("#auto-scrool-top").fadeIn();
    }else {
      $("#auto-scrool-top").fadeOut();
    }
  });
  $("#auto-scrool-top").click(function(){
    $("html,body").animate({
      scrollTop: 0
    },100);
    return false;
  });





});
