// const red = document.getElementById("red");
// const blue = document.getElementById("blue");
// const green = document.getElementById("green");
// const orange = document.getElementById("orange");
// const grey = document.getElementById("grey");

// const body = document.body;

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = "red";
// });

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = "blue";
// });

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = "green";
// });

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = "orange";
// });

// grey.addEventListener('click',()=>{
//     body.style.backgroundColor = "grey";
// });

//# Method 2
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//     document.body.style.backgroundColor = button.id;
//     });
// });


//# Method 3 optimised

const root = document.getElementById('root');

root.addEventListener('click',(event)=>{
    if(event.target.tagName === "BUTTON")
    document.body.style.backgroundColor = event.target.id;
})