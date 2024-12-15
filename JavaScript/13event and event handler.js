// document.getElementsByClassName('heading1').addEventlistener("click" , function(){
//     console.log("you have clicked h1 tag");
// })

document.getElementById('heading1').addEventListener("click",function(){  // when you click on element which has "heading1" as class, certain function will work
    console.log("you have clicked h1 tag");
})

document.getElementById('heading1').addEventListener("click",function(e){  // when you click on element which has "heading1" as class, certain function will work
    let variable;
    variable = e.target; // targeted element will be shown in console. The element(here it's <h1>.....<h1>) having Id Heading 1 will be shown
    console.log(variable);
})

document.getElementById('containerId').addEventListener("click",function(e){
    let variable;
    variable = e.target;
    console.log(variable);
    variable = e.target.className; // class name of targeted element will be retrieved
    console.log(variable);
    variable = e.target.id;
    console.log(variable);
    variable = e.offsetX; // shows the pixel from the starting of the element at x direction where you click 
    console.log(variable);
})
//click
let btn = document.getElementById('btn');
btn.addEventListener('click',firstFunction);

function firstFunction(e){
    console.log("you have clicked submit button",e);
    e.preventDefault();
}

//dblclick
btn.addEventListener('dblclick',secondFunction);

function secondFunction(e){
    console.log("you have double clicked submit button",e);
    e.preventDefault();
}

btn.addEventListener('mousemove',thirdFunction);

function thirdFunction(e){
    console.log("It is mouse move",e);
    e.preventDefault();
}

// mouseover event 
// mouseout event
// mouseenter event 
// mouseup event
// mousedown event