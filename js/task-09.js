const ref = {
  changeColorBtn : document.querySelector('button.change-color'),
  colorSpan : document.querySelector('span.color'),
}

ref.changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  ref.colorSpan.innerText = colorHex.toString();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
