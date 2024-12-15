// var --> variable
var language = "javascript";
var course = "Full Stack Web Development";
var rating = 5;
console.log(language, course, rating);

// can also reuse the defined variable without using the keyword 'var'
language = "C++";
console.log(language,course,rating);

// const --> constant
const marks = 93;
// marks = 34 (like 'var' we can't re-declare const)
const arr = [10,20,30]
console.log(arr);
arr.push(40);
console.log(arr);


// let --> block level element
var num = 50;
console.log(num);
{
    let num = 32;
    console.log(num); // 32 is displayed since it is inside the curly braces.
}
console.log(num);

// object literals
let students = {
    Avishek: 99,
    aldjf: 43,
    eiou : 35
}
console.log(students);
console.table(students); // Shows the data under students in table form 
