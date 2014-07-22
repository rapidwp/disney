  $(document).ready(function(){

    $(".navbar-toggle").click(function () {
      $(".navbar-header").hide();
      $("html, body").animate({ scrollTop: 0}, 1);
      $(".mobile-menu").show("slide", { direction: "right" }, 350);
      $("body").addClass("full");
      
    });
    
$(".mob-collapse").click(function () {
    $("body").removeClass("full");
    $(".mobile-menu").hide("slide", { direction: "right" }, 350);
    $(".navbar-header").show();
  });

  $(".btn.more").click(function () {
      $(this).toggleClass("loading");
     });
  
  $(".main-book .btn.buy").click(function () {
      $(".pop-up").show();
     });
  
  $(".cross-close").click(function () {
      $(".pop-up").hide();
     });

          
  });

