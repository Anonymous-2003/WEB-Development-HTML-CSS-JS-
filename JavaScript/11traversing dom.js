let x = document.querySelector('.container');
console.log(x.children); // shows all the children of class container
console.log(x.childNodes) //it will count the space, comment, text and also children of the class container

let nodename = x.children[1].nodeName; // shows the children at index 1.
console.log(nodename);



// Nodetype properties
/*
-> if it returns 1 it means it's an HTML element
--> 2 means attribute
--> 3 means Text node
--> 8 means comment
--> 9 means Document
--> 10 means doctype
*/

nodename = x.children[1].nodeType; // shows the children at index 1.
console.log(nodename); // it returns value 1 which means HTML element and div is html element

// Traversing DOM
let container = document.querySelector('div.container'); // filtering div with class container
console.log(container.children[2].children[0].children); // traverse div container which have children at 2nd index whih again have childrens at 0th index
console.log(container.firstChild); // shows the firs child of child nodes not first children
console.log(container.firstElementChild); // shows the first element child i.e real element
// similarly lastChild and lastElementChild

console.log(container.childElementCount); //returns the element that are inside container class 
console.log(container.firstElementChild.parentNode) // returns the parent node of first element child
console.log(container.firstElementChild.nextSibling) // returns the next child of first childnode
console.log(container.firstElementChild.nextElementSibling) // returns the next children of first children
