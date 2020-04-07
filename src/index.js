import aa from './aa.js';
let items = document.querySelectorAll('.item');
items.forEach(function(item, index){
    console.log(item);
    item.style.position = 'relative';
    item.style.left = 30 * index + 'px';
});
console.log(aa);