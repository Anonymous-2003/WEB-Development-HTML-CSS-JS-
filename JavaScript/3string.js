// string concatenation
let a = "Avishek";
let b = "Basyal";
c = a+b;
console.log(c);
c = a.concat(" "+b);
console.log(c);

let var1 = `My Name is Avishek Basyal`;
console.log(var1.length); // shows the length of var1
console.log(var1.toLowerCase());
console.log(var1.toUpperCase());
console.log(var1[4]);
console.log(var1.indexOf('A'));
console.log(var1.charAt(6));
console.log(var1.endsWith('yal')); // returns true if string ends with yal
console.log(var1.includes('asdf'));// returns true if string includes asdf
console.log(var1.substring(1,7)); // shows string from index 1 to 6
console.log(var1.split('a')); // splits the string from where letter 'a' occurs
console.log(var1.replace('Avishek','Rockstar'))// replaces 'Avishek' with 'Rockstar'

let var2 = 'Avishek';
let var3 = 'Arghakhanchi';
let var4 = `Hi I am ${var2} and I am from ${var3}`;
console.log(var4);

// To show anything written in javascript to html

html1= `<h1> Hello World . I am ${var2}</h1>`;
document.body.innerHTML = html1;