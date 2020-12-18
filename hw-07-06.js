const inputRef = document.querySelector('#validation-input');
const countOfSymbols = Number(inputRef.dataset.length);
const handleClass = (e) => {
    let value = e.target.value.length;
    value !== countOfSymbols ? e.target.classList.add('invalid')
    : e.target.classList.add('valid');
};
const clearInput = (e) => {
    e.target.value = '';
    e.target.classList.remove('valid', 'invalid');
};
inputRef.addEventListener('focus', clearInput);
inputRef.addEventListener('blur', handleClass);
