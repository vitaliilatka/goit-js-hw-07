const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');
inputRef.addEventListener(
    'input',
    (e) => {
        e.target.value = e.target.value.trim();
        textRef.textContent = e.target.value ? e.target.value : 'незнакомец';
    }
);
inputRef.addEventListener('click', (e) => {
    e.target.value = '';
    textRef.textContent = 'незнакомец';
});
