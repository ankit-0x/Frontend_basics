const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 == sym2);

const user = {
  name: "Ali",
  age: 22,
  isAdmin: true
};

const id = Symbol("id");
user[id] = 101;

console.log(user); // { name: 'Ali', age: 22, [Symbol(id)]: 101 }
console.log(user.id); // undefined ❌ (id is not a string key)
console.log(user[id]); // 101 ✅

const s = Symbol.for("id");

console.log(Symbol.keyFor(s));

let a = 4343147836124791823749832n;
let b = BigInt("4343147836124791823749832");
console.log(a+1n);
console.log(b);

let currentDate = new Date();
console.log(currentDate);

let pattern = /Hello/;
let result = pattern.test("Hello, World!");
console.log(result);

console.log(typeof a);

let str = typeof s;
console.log(str);

console.log(typeof Symbol("id"));

console.log(Array.isArray([1,2,3]));

console.error("Age Error!");
console.warn("Age error!");

let arr = [1,2,3];
console.log(arr);

let obj={
  name: "Ankit",
  age: 20,
  isAdmin: true
};

console.log(obj);
console.log(obj.age);
console.log(obj.name);

let fun= function(){
  console.log("Hello,World!");
  return 10;
}

fun();
console.log(fun());

console.log(Number(undefined));
console.log(String(null));

let x=10;

console.log(typeof x.toString());

let num = "200";
console.log(typeof +num);

console.log(5/2);
