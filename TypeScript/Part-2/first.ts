let x = 20;
// x = "Ankit"; //give error

let name = "Ankit";
// name = 20;  // give error

let money;
// let money:any;
money = "Ankit"; 
money = 20;// no error because let money:any ;
console.log(money.toFixed(2));
// console.log(money.toUpperCase());


let val2:unknown;
val2 = "Ankit";
val2 = 10;
// console.log(val2.toUpperCase());

if(typeof val2 === "string"){
    console.log(val2.toUpperCase());
}

if(typeof val2 === "number"){
    console.log(val2.toFixed(2));
}

let arr:number[] = [2,3,5,33,43];
let arr2 = [2,3,4,2,4];

let arr3:(string | number)[] = ["Ankit",20,"Sohan"];
arr3.push(10);
// arr3.push(true); // gives error

let arr4 = ["Ankit",20,"Amit"];

let arr5:(string | number | boolean)[] = ["Ankit",10,false,11];

let tuple:[string,number] = ["Ankit",10];

let user:[string,number,boolean];
user = ["Ankit",20,true];
// user = [20,"Ankit",true]; // gives error

let obj1 = {
    name:"Ankit",
    age: 20,
    gender: "Male"
};

//inline
let obj2:{name:string,age:number,gender:string} = {
    name:"Ankit",
    age: 20,
    gender: "Male"
};

//separate

let person:{name:string; age:number ; isStudent: boolean};

person = {
    name:"Ankit",
    age : 20,
    isStudent: true
};

// type alias
type customer = {
    name: string,
    age: number,
    id: string
}

let c1:customer = {
    name: "Ankit",
    age : 20,
    id: "abcd"
}

type user = {
    id: number
}

type Admin = user & {
    role: string
}

let worker: Admin = {
    id: 1234,
    role: "Manager"
}

// interface

interface admin {
    name: string,
    age: number,
    position: string
}

let per: admin = {
    name: "Ankit",
    age: 20,
    position: "manager"
};
interface employee {
    name: string,
    age: number,
    position: string
}

interface employee {
    id : number
}

let per1: employee = {
    name: "Ankit",
    age: 20,
    position: "manager",
    id: 1234
};

// extend in interface

interface person{
    name: string,
    age: number
}

interface Employee extends person{
    employeeId: number,
    department: string
}

const emp : Employee = {
    name: "Ankit",
    age: 20,
    employeeId: 1234,
    department: "Computer"
}


