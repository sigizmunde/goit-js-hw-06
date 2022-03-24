const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newElements = [];

for (const ingredient of ingredients) {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  newElements.push(newEl);
}
console.log(newElements);
document.querySelector('#ingredients').append(...newElements);