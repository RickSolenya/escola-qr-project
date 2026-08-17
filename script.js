/* =========================
   SWIPER
========================= */

const swiper = new Swiper(".mySwiper", {

    loop:true,

    spaceBetween:20,

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

});
function changeLanguage(language){

    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.getAttribute("data-key");

        if(translations[language][key]){

            element.innerHTML = translations[language][key];

        }

    });

}

/* =========================
   MAPA OPEN
========================= */

function openMap(image){

    const overlay = document.createElement("div");

    overlay.className = "map-fullscreen";


    const img = document.createElement("img");

    img.src = image.src;


    overlay.appendChild(img);


    document.body.appendChild(overlay);


    overlay.onclick = function(){

        overlay.remove();

    }

}