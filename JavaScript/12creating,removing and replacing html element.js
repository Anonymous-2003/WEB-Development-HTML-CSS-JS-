// Creating element in HTML using createElement()

let elem = document.createElement("a"); // creating anchor tag of html
console.log(elem); // anchor tag is shown in console window
elem.className = 'google'; // giving class name to anchor tag
elem.id = 'javascript'; // giving id to anchor tag
console.log(elem); // shows anchor tag with class and id

elem.setAttribute('href','//google.com'); // setting attributes for anchor tag
elem.innerText = "Click Here"; // shows the text Click Here in console window 

// to show the anchor tag in html document
let div = document.querySelector('div.container'); // creating div variable for div container
div.appendChild(elem); // appending elem child(i.e anchor tag ) inside div container. Now it will be shown in DOM

// getAttribute()
var h = document.getElementById("myanchor").getAttribute('href');
console.log(h); // it will shows the href link in console window

// hasAttribute()
h = document.getElementById("myanchor").hasAttribute('href');// returns true if href link is present in myanchor id
// if you remove href from html then it will show false
console.log(h);

// removeAttribute()
h = document.getElementById("myanchor").removeAttribute('href');
console.log(h); // it will show the href text but remove the href attribute

// replaceWith()
let elem1 = document.getElementById('id1');
let elem2 = document.createElement('div');

let content = document.createTextNode('Content Added only using Javascript');
elem2.appendChild(content); // appending text inside elem2(which consist div)
elem1.replaceWith(elem2); // replacing the div having id of id1 with div of elem2

// removeChild()
let list = document.getElementById('myUl');
if(list.hasChildNodes()){ // loop will start only if list variable has some childNodes
    list.removeChild(list.childNodes[1]); // removes the first child node of myUl id.
}