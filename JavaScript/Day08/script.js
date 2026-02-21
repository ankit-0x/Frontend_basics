let a = 5, b = 10;
[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

console.log(Array.prototype);
console.log(Array.prototype.__proto__);
console.log(Array.prototype.__proto__.__proto__);

function greet({ name = "Guest", age = 0 }) {
    console.log(`Hello ${name}, age ${age}`);
}

greet({}); // Output: Hello Guest, age 0
greet({ name: "Bob" }); // Output: Hello Bob, age 0

function greetUser(user){
    user.gender = "Male";
}

let person = {name:"Ankit", age:20};
greetUser(person);
console.log(person);
