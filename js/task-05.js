const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener("input", onInput);

function onInput(){
    outputEl.textContent = inputEl.value ? inputEl.value : 'Anonymous';
}