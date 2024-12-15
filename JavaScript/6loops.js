// for
for(let i =1;i<=10;i++){  // i is only valid inside this for loop
    console.log(i);
}

// for in
var person = {naame:'Sam',language:'Javascript',age:10};
for (var i in person){ // i is valid globally
    console.log(i + "=" + person[i]);
}

// for each
const arr = [2,3,5];
let sum = 0;
arr.forEach(element => {
    sum+=element;
    console.log(sum);
});

// while


// do while