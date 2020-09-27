import nouislider from "nouislider";

const priceSlider = document.querySelector(".catalog__filter-price-controls");

nouislider.create(priceSlider, {
    start: [500, 2500],
    connect: true,
    range: {
        "min": 0,
        "max": 4900
    }
});

const inputNumberStart = document.querySelector(".catalog__filter-price-input--start");
const inputNumberEnd = document.querySelector(".catalog__filter-price-input--end");

priceSlider.noUiSlider.on("update", function (values, handle) {
    let value = values[handle];

    if (handle) {
        inputNumberEnd.value = Math.round(value);
    } else {
        inputNumberStart.value = Math.round(value);
    }
});