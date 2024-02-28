export const preloader = (wait = 500) => {
    const preloaderObj = document.querySelector(".preloder");
    preloaderObj.classList.add("active");

    setTimeout(() => {
        preloaderObj.classList.remove("active");
    }, wait);
};
