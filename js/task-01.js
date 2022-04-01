const categoriesEl = document.querySelector('#categories')
    .querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(categoryEl => {
    console.log(`Category: ${categoryEl.firstElementChild.textContent}`);
    console.log(`Elements: ${categoryEl.querySelectorAll('li').length}`);
});