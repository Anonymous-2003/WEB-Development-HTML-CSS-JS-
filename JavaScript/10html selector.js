// 1. Single element selector

// getElementById()
let x = document.getElementById("demo");
x.style.color = 'green';


x= x.className; // returns the class name which have id of 'demo'
console.log(x);



let a = document.getElementById('test');
a = a.childNodes;
console.log(a);

// querySelector()
let y = document.querySelector('#demo') // # is used to select id , . is used to select class
y.style.color = 'red';

y = document.querySelector('h1'); // changes the h1 tag which appear first
y.style.color = "blue";

// Multi element Selector

// querySelectorAll()
let b = document.querySelectorAll("div");
console.log(b);

// getElementsByTagName()
let article = document.getElementsByTagName("article");
console.log(article);

for(let i = 0;  i<article.length ; i++){
    article[i].style.border = '2px solid black'
}

//getElementsByClassName
let n = document.getElementsByClassName('heading1');
console.log(n);