const inputEl = document.querySelector('input#font-size-control');
const outputEl = document.querySelector('span#text');

inputEl.addEventListener('input', refreshFontSize);

function refreshFontSize(){
    outputEl.style.fontSize = `${this.value}px`;
}