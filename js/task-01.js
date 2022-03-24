const categoriesEl = document.querySelector('#categories')
    .querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

for (const categoryEl of categoriesEl) {
    console.log(`Category: ${categoryEl.firstElementChild.textContent}`);
    console.log(`Elements: ${categoryEl.querySelectorAll('li').length}`);
}

