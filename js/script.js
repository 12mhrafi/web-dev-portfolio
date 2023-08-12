
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.getElementById("openMenu");

menuBtn.addEventListener("click" , ()=>{
    mobileNav.classList.toggle("active");
})



// swipper js in what client says (testimonial) 
// <!-- Initialize Swiper -->
var swiper = new Swiper(".what-client-says", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// <!-- Initialize Swiper -->
