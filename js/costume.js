$(function(){
    'use strict' ;
    $(window).scroll(function (){
       var navbar= $(".navbar");
        if($(window).scrollTop() >= navbar.height()){
           navbar.addClass("scrolled");
       }else{
           navbar.removeClass("scrolled")
       }
           
    });
  // Deal with Tabs
 $(".tabs-switch li").click(function(){
     //add selected class to active list
     $(this).addClass("active").siblings().removeClass("active");
     //hide all divs
     $(".tabs-section .tabs-content > div").hide();
     //show Div connected with this link
     $("."+ $(this).data("class")).show();
  });
window.onscroll = function() {scrollFunction()};

  
});


function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop >300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}