/* =========================
   SWIPER
========================= */

const swiper = new Swiper(".mySwiper", {

    loop: true,

    spaceBetween: 20,

    centeredSlides: true,

    pagination: {

        el: ".swiper-pagination",

        clickable: true,
    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",
    },

});