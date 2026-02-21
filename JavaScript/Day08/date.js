const d = new Date();
console.log(d);
console.log(d.toDateString());

//countdown timer

const date1 = new Date();
const date2 = new Date("2028-07-14");

const date = date2-date1;

const days = Math.floor(date/(1000*60*60*24));
const hours = Math.floor(date/(1000*60*60)%24);
const minutes = Math.floor(date/(1000*60)%60);
const seconds = Math.floor(date/(1000)%60);

console.log(`Days:${days}  Hours:${hours}  Minutes:${minutes} Seconds:${seconds}`);

// (1) Current date & time
const now = new Date();
console.log(now);

// (2) Specific date & time (YYYY, M, D, h, m, s, ms)
const d1 = new Date(2025,8); 
// Month is 0-based → 8 = September
console.log(d1);

// (3) From date string
const d2 = new Date("8");
console.log(d2);

// (4) From milliseconds since 1970-01-01
const d3 = new Date(0);
console.log(d3); // Thu Jan 01 1970


console.log("-----------------------------------");

let today = new Date();
console.log(today);
today.setFullYear(2030);
today.setMonth(11);
today.setDate(25);
today.setHours(10);
today.setMinutes(30);
today.setMilliseconds(999);
today.setSeconds(50)
console.log(today.toDateString());

console.log("-----------------------------------");

const da = new Date();
console.log(da.toLocaleString());


let person = {
  name: "Rahul",
  age: 25,
  isStudent: true
};

console.log(person);

let obj = { null: "nothing", undefined: "empty" };
console.log(obj.null);       // nothing
console.log(obj["undefined"]); // empty
console.log(obj.undefined); // empty



let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

let result = Object.assign(obj1, obj2);
console.log(result); 
console.log(obj1); 
result.a=10;
result.d=20;
console.log(result); 
console.log(obj1); 
// { a: 1, b: 3, c: 4 }

let obj5 = {
  name: "Alice",
  address: { city: "Delhi", pin: 110001 }
};

let shallowCopy = Object.assign({}, obj5);

// Modify top-level property
shallowCopy.name = "Bob";
console.log(obj5.name);       // Alice ✅ (original unaffected)

// Modify nested property
shallowCopy.address = "Mumbai";
console.log(shallowCopy.address); // Mumbai ❌ (original affected)


