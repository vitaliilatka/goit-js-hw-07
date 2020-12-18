const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
const handleFontSize = (e) => (textRef.style.fontSize = e.target.value + 'px');
inputRef.addEventListener('input', handleFontSize);
