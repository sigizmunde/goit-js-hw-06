let counterValue = 0;

const counterSpan = document.querySelector('#value');

document.querySelector('button[data-action="decrement"]').addEventListener('click', ()=> {
    counterValue -= 1;
    refreshCounter(counterValue, counterSpan);
});
document.querySelector('button[data-action="increment"]').addEventListener('click', ()=> {
    counterValue += 1;
    refreshCounter(counterValue, counterSpan);
});

function refreshCounter(value, element){
    element.innerText = value + '';
}