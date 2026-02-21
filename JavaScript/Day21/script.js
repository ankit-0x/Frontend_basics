//<li>TS</li> Create a element

const element = document.createElement('li');
element.innerHTML="TS";

const parent = document.getElementById('third');
parent.appendChild(element);

const element2 = document.createElement('h2');
element2.innerHTML="Practice is key to success!";

const parent1 = document.getElementById('root');
parent1.append(element,element2);

// Create a text Node

const element3 = document.createTextNode("What are you doing?");
parent.append(element3);
parent1.append("Hi! what happened?");

// Create a Attribute node

const element4 =document.createAttribute('id');
element4.value = "fourth";

//Access to first list of unordered list
const curr_list = document.querySelector('li');
curr_list.setAttributeNode(element4);

//Access to second list of unordered list
const element5 = document.createAttribute('id');
element5.value = "fifth";
parent.children[1].setAttributeNode(element5);

//Accessing Attribute of a element
console.log(third.getAttribute("id"));
console.log(third.getAttribute("class"));
console.log(third.getAttribute("style"));
console.log(third.getAttribute("value"));

console.log(third.setAttribute("custom","20"));
console.log(third.setAttribute("class","Rohan"));

console.log(third.removeAttribute("custom"));


// Add Nodes to the Dom
// 1. appendChild(node)
// 2. append(node1,node2,..)

const element6 = document.createElement('li');
element6.innerHTML = "CN";

parent.prepend(element6);

const element7 = document.createElement('li');
element7.innerHTML = "OS";

const child2 = parent.children[1];
parent.insertBefore(element7,child2);

const element8 = document.createElement('li');
element8.innerHTML = "CS";

parent.replaceChild(element8,child2);


// parent.innerHTML = "TS";

// parent.innerHTML += "TS";

parent.innerHTML += "<li>TS</li>";

const ele = document.createElement('div');
ele.innerHTML = "Hello";

// parent.insertAdjacentElement("beforebegin",ele);
// parent.insertAdjacentElement("afterbegin",ele);
// parent.insertAdjacentElement("afterend",ele);
parent.insertAdjacentElement("beforeend",ele);

document.querySelector('li').remove();
