// 2 syntax to create Array
let arr1 = [10,50,35,62,72];
console.log(arr1);

let arr2 = new Array(1,45,47,25,30,15);

console.log(arr2[3]);

// indexof()
let students = ['Avishek', 'Jack', 'sam','tom'];
let a = students.indexOf('sam');
console.log(a);

console.log(arr1.indexOf(72));

//sort()
arr2.sort();
console.log(arr2);

//reverse()
console.log(arr1.reverse());

//concat()
let a1 = ['a','b','c'];
let n = [1,2,3,4];
let an = a1.concat(n);
console.log(an);

//push()
let city = ['Arghakhanchi','Sandhikharka','Butwal'];
city.push('Kathmandu'); // Adds the element at the end of the array
console.log(city);

//pop() -->removes the last element of the array

//shift() --> removes the start item of the array
city.shift();
console.log(city);

//unshift() --> adds the item to begining of the array

// Objects in javascript
// 2 syntax to create an object

let user = {
    name:'Jack',
    age:19,
    language:'Javascript'
}
console.log(user);

let user1 = new Object();
user1.name = 'Daniels';
user1.age = 22;
user1.language = 'C++';
console.log(user1);


