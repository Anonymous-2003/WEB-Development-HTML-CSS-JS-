// window object properties
let a = document;
console.log(a); // in console log window #document stands for our entire html webpage

a= window.innerWidth; // It specifies the innitial width of window content area
a=window.innerHeight;
a=location.toString(); // Display the ip address of our website

scrollX; // shows how much you have scrolled
scrollY;

// try on console window after opening some site
history.go(-1) // returns to previous webpage
history.go(+1) // goes to next page

// window object methods --> used to perform various action on your browser window
// window.alert("There is error"); // shows error
window.prompt("Enter your login id"); // allows user to enter something

// window.close(); // close the window

window.confirm("Are you sure you want to continue");