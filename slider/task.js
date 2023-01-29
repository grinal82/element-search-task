const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".slider__item");
const prevArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");

let currentIndex = 0;

items[currentIndex].classList.add("slider__item_active");

prevArrow.addEventListener("click", () => {
    items[currentIndex].classList.remove("slider__item_active");

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    items[currentIndex].classList.add("slider__item_active");
});

nextArrow.addEventListener("click", () => {
    items[currentIndex].classList.remove("slider__item_active");

    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    items[currentIndex].classList.add("slider__item_active");
});
