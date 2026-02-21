"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "Ankit",
    age: 20,
    gender: "Male",
    adhaar: 1234, // this is optional , you can write or not , no error
};
const obj1 = {
    // all properties are optional
    name: "Ankit",
};
const obj2 = {
    // all properties are required
    name: "Ankit",
    balance: 240,
    age: 20,
};
const obj3 = {
    // all properties are readonly,you cannot change any property value
    name: "Ankit",
    balance: 240,
    age: 20,
};
//obj3.name = "Amit"; //gives error
//Array of objects
let arr = [
    { name: "Amit", age: 20 },
    { name: "Ankit", age: 21 },
];
let arr1 = [
    { name: "Amit", age: 20 },
    { name: "Ankit", age: 21 },
];
const arr2 = [
    { name: "Amit", age: 20 },
    { name: "Ankit", age: 21 },
];
let arr3 = [
    { name: "Amit", age: 20 },
    { salary: 23434, id: "43534" },
];
//function in ts
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Anshika Verma", 4);
//optional parameters
function meet1(name) {
    console.log(name || "Guest");
}
meet1();
meet1("Ankit Kumar");
//default parameters
function meet2(name = "Guest") {
    console.log(name);
}
meet2();
meet2("Ankit Kumar");
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 4));
//Callback Function in ts
function greet1(name) {
    console.log("Hello " + name);
}
function processUserInput(Callback) {
    let name = "John";
    Callback(name);
}
processUserInput(greet1);
function placeOrder(order, Callback) {
    const amount = order + 10;
    Callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
//Rest parameter (...arr)
//IN js
// function total(...arr){
// }
// total(1,2,3,4,5,3,54,4,4,3,3);
//in ts
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => (ans = ans + val));
    console.log(ans);
}
total(33, 3, 3, 23, 3, 2, 3, 2, 3, 3, 3);
//Classes in TS
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    cgreet() {
        console.log(`Hi ${this.name}`);
    }
}
const Cobj = new Person("Ankit", 20);
console.log(Cobj);
const Cobj1 = new Person("Ankit", 20);
console.log(Cobj1);
Cobj.cgreet();
//public private protected
class student {
    name;
    course;
    roll_no;
    constructor(name, course, roll_no) {
        this.name = name;
        this.course = course;
        this.roll_no = roll_no;
    }
    cmeet(a) {
        this.course = a;
        console.log(this.course);
    }
    cmeet1() {
        console.log(this.roll_no);
    }
}
const student1 = new student("Ankit", "Btech", 71);
console.log(student1.name); // no error, because public is accessible everywhere
// console.log(student1.course); // gives error because private is not accessible outside class
// console.log(student1.roll_no);// gives error because protected is not accessible outside class
// student1.course = "MCA";// no change due to private
student1.cmeet("MCA");
// student1.cmeet1(); // gives error because private is not accessible outside class
class client {
    name;
    age;
    id;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    meet2() {
        console.log("Parent class");
        return this.age;
    }
}
class employee extends client {
    salary;
    // constructor(salary:number){ // gives error
    //     this.salary = salary;
    // }
    constructor(salary, name, age, id) {
        super(name, age, id);
        this.salary = salary;
    }
    greet4() {
        console.log(this.name); // public
        // console.log(this.age); // gives error , private variable
        console.log(this.id); // protected is accessible in derived class
    }
    meet2() {
        console.log("Child Class");
        return 10;
    }
}
const p1 = new employee(45000, "Deepak", 30, 456);
console.log(p1.meet2()); // calls child meet2 func due to method overriding
//Generics in TS
// function check(a:(number|string|boolean|number[]|string[])):(number|string|boolean|number[]|string[]){
//     return a;
// }
function check(a) {
    return a;
}
console.log(check(10));
console.log(check(10));
console.log(check("Ankit"));
console.log(check("Ankit"));
console.log(check(true));
console.log(check([34, 5, 4, 54, 4, 4]));
console.log(check(["Abc", "Def"]));
const per = {
    name: "Ankit",
    age: 20,
    adhaar: 123,
};
const per1 = {
    name: "Ankit",
    age: 20,
    adhaar: "123",
};
const per2 = {
    name: "Ankit",
    age: 20,
    adhaar: 123,
    salary: 5000,
};
