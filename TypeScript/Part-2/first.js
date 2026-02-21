"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 20;
// x = "Ankit"; //give error
let name = "Ankit";
// name = 20;  // give error
let money;
// let money:any;
money = "Ankit";
money = 20; // no error because let money:any ;
console.log(money.toFixed(2));
// console.log(money.toUpperCase());
let val2;
val2 = "Ankit";
val2 = 10;
// console.log(val2.toUpperCase());
if (typeof val2 === "string") {
    console.log(val2.toUpperCase());
}
if (typeof val2 === "number") {
    console.log(val2.toFixed(2));
}
let arr = [2, 3, 5, 33, 43];
let arr2 = [2, 3, 4, 2, 4];
let arr3 = ["Ankit", 20, "Sohan"];
arr3.push(10);
// arr3.push(true); // gives error
let arr4 = ["Ankit", 20, "Amit"];
let arr5 = ["Ankit", 10, false, 11];
let tuple = ["Ankit", 10];
let user;
user = ["Ankit", 20, true];
// user = [20,"Ankit",true]; // gives error
let obj1 = {
    name: "Ankit",
    age: 20,
    gender: "Male"
};
//inline
let obj2 = {
    name: "Ankit",
    age: 20,
    gender: "Male"
};
//separate
let person;
person = {
    name: "Ankit",
    age: 20,
    isStudent: true
};
let c1 = {
    name: "Ankit",
    age: 20,
    id: "abcd"
};
let worker = {
    id: 1234,
    role: "Manager"
};
let per = {
    name: "Ankit",
    age: 20,
    position: "manager"
};
let per1 = {
    name: "Ankit",
    age: 20,
    position: "manager",
    id: 1234
};
const emp = {
    name: "Ankit",
    age: 20,
    employeeId: 1234,
    department: "Computer"
};
