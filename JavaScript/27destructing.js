// object destructing
const person = {first:'James',last:'Anderson',country:'England'};
const {first,second}=person;
console.log(first);
console.log(second);

// array destructing
var colors = ['Red','Green','Yello','White'];
var [a,b,...c]=colors; // a stores red, b stores green and c stores yellow and white in array
console.log(a);
console.log(b);
console.log(c);
