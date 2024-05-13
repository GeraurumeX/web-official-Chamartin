//jquery for toggle dropdown menus
$(document).ready(function() {
    //toggle sub-menus
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });

    //toggle more-menus
    $(".more-btn").click(function(){
        $(this).next(".more-menu").slideToggle();
    });
});

//Javascript for the responsive navigation menu
var  menu = document.querySelector(".menu");
var  menuBtn = document.querySelector(".menu-btn");
var  closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// Swiper script
var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
