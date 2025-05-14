
var swiper = new Swiper(".slides-container", {
    slidesPerView: "auto",
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // watchSlidesProgress: true,
    // grabCursor: true,
});
