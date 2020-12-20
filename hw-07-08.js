const inputRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let boxes = [];
const randomRgb = () => {
    const randomBetween = Math.floor(Math.random() * 256);
    const r = randomBetween();
    const g = randomBetween();
    const b = randomBetween();
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb;
};

const createBoxes = (amount) => {
    for (let i = 1; i <= amount; i += 1) {
        const boxRef = document.querySelector('div');
        boxRef.style.width = `${30 + 10 * (i - 1)}px`;
        boxRef.style.height = `${30 + 10 * (i - 1)}px`;
        boxRef.style.backgroundColor = randomRgb();
        boxRef.style.marginRight = '5px';
        boxes.push(boxRef);
    }
    boxesRef.append(...boxes);
};

const destroyBoxes = () => {
    boxes = [];
    inputRef.value = '';
    boxesRef.querySelectorAll('div').forEach((div) => div.remove());
};

createBtnRef.addEventListener('click', () => {
    createBoxes(inputRef.value);
});

destroyBtnRef.addEventListener('click', destroyBoxes);

