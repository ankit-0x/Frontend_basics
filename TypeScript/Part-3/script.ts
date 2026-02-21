interface person {
  name: string;
  age: number;
  gender: string;
  adhaar?: number;
}

const obj: person = {
  name: "Ankit",
  age: 20,
  gender: "Male",
  adhaar: 1234, // this is optional , you can write or not , no error
};

interface customer {
  name: string;
  age: number;
  balance: number;
}

const obj1: Partial<customer> = {
  // all properties are optional
  name: "Ankit",
};
const obj2: Required<customer> = {
  // all properties are required
  name: "Ankit",
  balance: 240,
  age: 20,
};
const obj3: Readonly<customer> = {
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

let arr1: { name: string; age: number }[] = [
  { name: "Amit", age: 20 },
  { name: "Ankit", age: 21 },
];

interface people {
  name: string;
  age: number;
}

const arr2: people[] = [
  { name: "Amit", age: 20 },
  { name: "Ankit", age: 21 },
];

interface manager {
  salary: number;
  id: string;
}

let arr3: (people | manager)[] = [
  { name: "Amit", age: 20 },
  { salary: 23434, id: "43534" },
];

//function in ts

function greet(a: number): number {
  console.log(a);
  return a + 5;
}

console.log(greet(10));

function meet(msg: string, val: number): void {
  console.log(msg, val);
}

meet("Anshika Verma", 4);

//optional parameters

function meet1(name?: string): void {
  console.log(name || "Guest");
}

meet1();
meet1("Ankit Kumar");

//default parameters

function meet2(name: string = "Guest") {
  console.log(name);
}

meet2();
meet2("Ankit Kumar");

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(3, 4));

//Callback Function in ts
function greet1(name: string): void {
  console.log("Hello " + name);
}

function processUserInput(Callback: (name: string) => void) {
  let name: string = "John";
  Callback(name);
}

processUserInput(greet1);

// function placeOrder(order:number, Callback:(amount:number)=>void){
//     const amount:number = order+10;
//     Callback(amount);
// }

type chill = (amount: number) => void;
function placeOrder(order: number, Callback: chill) {
  const amount: number = order + 10;
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
function total(...arr: number[]) {
  let ans: number = 0;
  arr.forEach((val: number) => (ans = ans + val));
  console.log(ans);
}

total(33, 3, 3, 23, 3, 2, 3, 2, 3, 3, 3);

//Classes in TS

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  cgreet(): void {
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
  public name: string;
  private course: string;
  protected roll_no: number;

  constructor(name: string, course: string, roll_no: number) {
    this.name = name;
    this.course = course;
    this.roll_no = roll_no;
  }

  cmeet(a: string): void {
    this.course = a;
    console.log(this.course);
  }
  private cmeet1(): void {
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
  public name: string;
  private age: number;
  protected id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  meet2(): number {
    console.log("Parent class");
    return this.age;
  }
}

class employee extends client {
  salary: number;
  // constructor(salary:number){ // gives error
  //     this.salary = salary;
  // }

  constructor(salary: number, name: string, age: number, id: number) {
    super(name, age, id);
    this.salary = salary;
  }

  greet4(): void {
    console.log(this.name); // public
    // console.log(this.age); // gives error , private variable
    console.log(this.id); // protected is accessible in derived class
  }

  meet2(): number {
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

function check<T>(a: T): T {
  return a;
}

console.log(check(10));
console.log(check<number>(10));
console.log(check("Ankit"));
console.log(check<string>("Ankit"));
console.log(check(true));
console.log(check([34, 5, 4, 54, 4, 4]));
console.log(check(["Abc", "Def"]));

//Generic with interfaces
interface admin<T> {
  name: string;
  age: number;
  adhaar: T;
}

const per: admin<number> = {
  name: "Ankit",
  age: 20,
  adhaar: 123,
};
const per1: admin<string> = {
  name: "Ankit",
  age: 20,
  adhaar: "123",
};
interface admin1<T, U> {
  name: string;
  age: number;
  adhaar: T;
  salary: U;
}

const per2: admin1<number, number> = {
  name: "Ankit",
  age: 20,
  adhaar: 123,
  salary: 5000,
};
