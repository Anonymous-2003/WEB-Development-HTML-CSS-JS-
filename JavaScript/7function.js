// Function declaration
function display(message){
    console.log(message);
}
display("Javascript is the brain of web page");

//Function Expression
let add = function(a,b){
    return a + b;
}
console.log(add(5,6));

function distance(speed,time){
    let dist = speed * time;
    console.log(dist);
}
distance(8,5);