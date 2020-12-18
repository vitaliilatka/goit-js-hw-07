let counterValue = 0;
const btnIncrementRef = document.querySelector(
    '#counter button[data-action="increment"]'
);
const btnDecrementRef = document.querySelector(
    '#counter button[data-action="decrement"]'
);
const textRef = document.querySelector('#value');
const increment = () => {
    textRef.textContent = (counterValue += 1);
};
const decrement = () => {
    textRef.textContent = (counterValue -= 1);
};
btnIncrementRef.addEventListener('click', increment);
btnDecrementRef.addEventListener('click', decrement);