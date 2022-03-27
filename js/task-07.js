const inputEl = document.querySelector('input#font-size-control');
const outputEl = document.querySelector('span#text');

inputEl.addEventListener('input', onFontSizeInput);

function onFontSizeInput(){
    outputEl.style.fontSize = `${this.value}px`;
}