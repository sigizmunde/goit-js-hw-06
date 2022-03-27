const containerEl = document.querySelector('div#boxes');

const controlsRef = {
  number : document.querySelector('input[type=number]'),
  create : document.querySelector('[data-create]'),
  destroy : document.querySelector('[data-destroy]'),
}

controlsRef.create.addEventListener('click', onCreateBtnClick);
controlsRef.destroy.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  // console.log('create btn');
  createBoxes(parseInt(controlsRef.number.value));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes(amount) {
  const newElements = [];
  for (let i = 0; i < amount; i += 1) {
    newElements.push(createRandomBox(30 + (10 * i)));
  }
  // console.log(newElements);
  containerEl.append(...newElements);
}

function createRandomBox(size) {
  const newEl = document.createElement('div');
  newEl.style.width = `${size}px`;
  newEl.style.height = `${size}px`;
  newEl.style.backgroundColor = getRandomHexColor();
  return newEl;
}

function onDestroyBtnClick() {
  // console.log('destroy btn');
  containerEl.innerHTML = '';
}