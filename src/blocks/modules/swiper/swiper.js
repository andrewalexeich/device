// Import Swiper and modules
import { Swiper, Pagination, Autoplay } from "swiper/dist/js/swiper.esm.js";

// Install modules
Swiper.use([Pagination, Autoplay]);

new Swiper(".swiper-container", {
    autoplay: {
        delay: 7000,
    },
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true
    }
});