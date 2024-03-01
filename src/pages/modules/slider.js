import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const slider = (elemSelector) => {
    console.log(elemSelector);
    Swiper.use([Navigation]);
    const swiper = new Swiper(elemSelector, {
        loop: true,
        navigation: {
            nextEl: ".hero__slider-arrow.arrow__next",
            prevEl: ".hero__slider-arrow.arrow__prev"
        },
        pagination: {
            el: ".hero__slider-pagination"
        },
        modules: [Navigation, Pagination]
    });
};
