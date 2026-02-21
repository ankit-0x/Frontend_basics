const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// child.addEventListener('click',()=>{
//     console.log("Child clicked");
// },false);

// parent.addEventListener('click',()=>{
//     console.log("Parent clicked");
// },false);

// grandparent.addEventListener('click',()=>{
//     console.log("GrandParent clicked");
// },false);


// child.addEventListener('click',()=>{
//     console.log("Child clicked");
// },true);

// parent.addEventListener('click',()=>{
//     console.log("Parent clicked");
// },true);

// grandparent.addEventListener('click',()=>{
//     console.log("GrandParent clicked");
// },true);

// child.addEventListener('click',()=>{
//     console.log("Child clicked");
// },false);

// parent.addEventListener('click',()=>{
//     console.log("Parent clicked");
// },true);

// grandparent.addEventListener('click',()=>{
//     console.log("GrandParent clicked");
// },false);

// child.addEventListener('click',()=>{
//     console.log("Child clicked");
// },false);

// parent.addEventListener('click',()=>{
//     console.log("Parent clicked");
// },true);

// grandparent.addEventListener('click',()=>{
//     console.log("GrandParent clicked");
// },true);

child.addEventListener('click',()=>{
    console.log("Child clicked");
},true);

parent.addEventListener('click',()=>{
    console.log("Parent clicked");
},false);

grandparent.addEventListener('click',()=>{
    console.log("GrandParent clicked");
},true);

// child.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);

// },false);

// parent.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);

// },false);

// grandparent.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);

// },false);

// child.addEventListener('click',(event)=>{

// },false);

// parent.addEventListener('click',(event)=>{

// },false);

// grandparent.addEventListener('click',(event)=>{
//     console.log(event.target);
//     console.log(event.currentTarget);

// },false);

// child.addEventListener('click',(event)=>{
//     console.log("Child clicked");
//     event.stopPropagation();
// },false);

// parent.addEventListener('click',(event)=>{
//     console.log("Parent clicked");
//     event.stopPropagation();

// },false);

// grandparent.addEventListener('click',(event)=>{
//     console.log("GrandParent clicked");
//     event.stopPropagation();
// },false);