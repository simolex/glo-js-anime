const modal = document.querySelector(".search-model");
const searchBtn = document.querySelector(".search-switch");
const closeBtn = modal.querySelector(".search-close-switch");
const searchInput = document.getElementById("search-input");

const setDebounce = (callback, ms) => {
    let timeRef;
    return (...args) => {
        if (timeRef) {
            clearTimeout(timeRef);
        }

        timeRef = setTimeout(() => {
            callback.apply(null, args);
        }, ms);
    };
};

const debounceLog = setDebounce(console.log, 300);

searchBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "";
});

searchInput.addEventListener("input", (e) => {
    debounceLog(e.target.value);
});
