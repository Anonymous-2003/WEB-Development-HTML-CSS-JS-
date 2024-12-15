// Type conversion

let var1 = 100;
console.log(var1 , (typeof var1));
// converting to string
var1 = String(100);
console.log(var1, typeof var1);

// another method
let var2;
var2 = new Date();
console.log(var2 , typeof var2);
var2 = String(new Date())
console.log(var2 , typeof var2);

let arr;
arr = [10,20,30,50,'Avishek'];
console.log(arr, typeof arr);
arr = String([10,20,30,50,'Avishek']);
console.log(arr, typeof arr);

let x = "84356.98675";
// let y = "84356.98675";
console.log(x,typeof x);
x = parseInt("84356.98675"); // converting string to int
console.log(x,typeof x);
x=parseFloat("84356.98675")
console.log(x.toFixed(3), typeof x); // rounding upto 3 decimal place

// Type Coercion
let a = "9867";
let b = 5;
c=a+b; // converts number into string as number and string can't be added
console.log(c , typeof c);


