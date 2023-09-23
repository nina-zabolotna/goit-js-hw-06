const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});


const categoryList = document.querySelector('#categories');
const items = document.querySelector('.item');

categoryList.addEventListener('mouseover', changeColor);

function changeColor() {
    const randomColor = getRandomHexColor();
    categoryList.textContent = randomColor;
    items.textContent = randomColor;
    
};









