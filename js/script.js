

$(".anim-line1").on("animationend", removeBorder);

function removeBorder(){
    console.log("working");
        $(".anim-line1").css('border','none');
}

$(".anim-line2").on("animationstart", showBorder);

function showBorder(){
    console.log("working");
        $(".anim-line2").css('border-right','2px solid transparent');
}




$(".cursor").on("animationend", runClick);

function runClick(){
   $("#runButton").addClass('clicked')
   window.location.replace("./home.html");
}


$(document).ready(function() {
    const fadeElements = $('.fade-element');
  
    function handleScroll() {
      fadeElements.each(function() {
        const element = $(this);
        if (isElementInViewport(element)) {
          element.addClass('fade-in').removeClass('fade-out');
        } else {
          element.removeClass('fade-in').addClass('fade-out');
        }
      });
    }
    function isElementInViewport(element) {
        const rect = element[0].getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const elementHeight = rect.height;
        const threshold = windowHeight * 0.1; // 10% of window height
      
        return (
          rect.bottom >= threshold &&
          rect.top <= windowHeight - threshold
        );
      }
      
      
    handleScroll();
  
    $(window).scroll(handleScroll);
  });
  


