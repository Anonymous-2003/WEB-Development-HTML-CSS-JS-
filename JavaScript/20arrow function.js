// creating regular function
function fun1(){
    console.log("Regular function");
}
fun1();

// storing regular function inside variable
const fun2 = function(){
    console.log("Storing Regular Function");
}
fun2();

// creating arrow function
const fun3 = ()=>{
    console.log("Creating Arrow function");
}
fun3();

// arrow function in one line
const fun4 = ()=> "This is one liner arrow function";
console.log(fun4());

// passing one argument in arrow function
const fun5 = name=> "Hello " + name;
console.log(fun5("Avishek"));

// passing multiple argument
const fun6 = (name,surname)=>"Hello " + name + surname;
console.log(fun6("Avishek"," Basyal"));

// Arrow are best choices while working with callbacks but not a good choice while working with object method and constructor
