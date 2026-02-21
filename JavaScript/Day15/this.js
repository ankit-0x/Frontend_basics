// console.log(80);

// let a = 10;
// const b = 20;
// var c = 20;
// // console.log(this===window);
// console.log(this.c);
// console.log(this);
// // console.log(window);

// function greet() {
//   console.log(this);
// }

// greet();

// const user = {
//   name: "Bob",
//   greet: function () {
//     let ab = () => {
//       console.log("Hello, " + this.name);
//       console.log(this);
//     };
//     ab();
//   },
// };

// user.greet(); // Hello, undefined

// class Student {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hi, " + this.name);
//   }
// }

// const s1 = new Student("Charlie");
// s1.greet(); // Hi, Charlie
// console.log(s1);

// "use strict";
// var meet = function(){
//   console.log(this);
// };

// window.meet();

function sayHello() {
  console.log("Hello, " + this.name + this.age);
}

const person = { name: "David", age: 20 };

sayHello.call(person);  // Hello, David
sayHello.apply(person); // Hello, David

const boundFunc = sayHello.bind(person);
boundFunc();            // Hello, David

