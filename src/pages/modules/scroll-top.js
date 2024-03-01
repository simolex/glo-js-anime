import { scrollIntoView } from "seamless-scroll-polyfill";

export const scrollingTop = () => {
    const topBtn = document.getElementById("scrollToTopButton");
    const header = document.querySelector(".header");

    topBtn.addEventListener("click", (e) => {
        e.preventDefault();

        scrollIntoView(header, {
            behavior: "smooth",
            block: "start"
        });
    });
};
