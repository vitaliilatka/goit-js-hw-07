const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const createItem = item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
}  
const items = ingredients.map((item) => createItem(item));
const listRef = document.querySelector('#ingredients');
listRef.append(...items);
console.log(listRef);
