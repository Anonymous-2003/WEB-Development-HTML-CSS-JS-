// if else
let age = 18;
if(age>18){
    console.log("You are adult");
}
else{
    console.log('You are not an adult');
}

//Ternary operater
let age1 = 15
console.log(age1==19?'You are nineteen':'You are not nineteen');

// Switch case
let age2 = 15;
switch (age2) {
    case 18:
        console.log('You are adult');
        break;
    case 15:
        console.log("You are in teenage");
        break;
    case 60:
        console.log("You are senior citizen");
    default:
        console.log('Your age is unknown');
        break;
}