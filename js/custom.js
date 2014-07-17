  $(document).ready(function(){

    $(".navbar-toggle").click(function () {
      
      $(".navbar-header").hide();
      $(".mobile-menu").show("slide", { direction: "right" }, 350);
      
      
    });
    
$(".mob-collapse").click(function () {
    $("body").removeClass("full");
    $(".mobile-menu").hide("slide", { direction: "right" }, 350);
    $(".navbar-header").show();
  });

  $(".btn.more").click(function () {
      $(this).toggleClass("loading");
     });
    
  });

