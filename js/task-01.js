const categoriesList = document.querySelector('#categories');
const items = categoriesList.children;

console.log('Number of categories:', Number(items.length));

for(let item of items){
console.log('Category:', item.children[0].textContent)
console.log('Elements:', Number(item.children[1].children.length))
};
