let counterDisplayElem = document.querySelector('.counter-display');

// - Counter

let counterMinusElem = document.querySelector('.counter-minus');
let counterMinusElem10 = document.querySelector('.counter-minus10');
let counterMinusElem100 = document.querySelector('.counter-minus100');

// + Counter
let counterPlusElem = document.querySelector('.counter-plus');
let counterPlusElem10 = document.querySelector('.counter-plus10');
let counterPlusElem100 = document.querySelector('.counter-plus100');

// Reset Counter
let counterReset = document.querySelector('.counter-reset');

// Multiply
let counterMultiply = document.querySelector('.counter-multiply');

let count = 0;
let reset = 0;

updateDisplay();

counterReset.addEventListener("click", () => {
    count = reset;
    updateDisplay();
});

counterMultiply.addEventListener("click", () => {
    count *= 2;
    updateDisplay();
});

counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterPlusElem10.addEventListener("click", () => {
    count += 10;
    updateDisplay();
});

counterPlusElem100.addEventListener("click", () => {
    count += 100;
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
});

counterMinusElem10.addEventListener("click", () => {
    count -= 10;
    updateDisplay();
});

counterMinusElem100.addEventListener("click", () => {
    count -= 100;
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};