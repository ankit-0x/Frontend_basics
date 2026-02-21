const obj = {a:1, b:2};
console.log(Object.entries(obj));

const obj1 = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.keys(obj1));


[1,2,3,4].forEach(num => {
  if(num === 3) return;
  console.log(num); // only skips current iteration
});

const arr = [1, , 3];
console.log(arr.filter(x => x>2)); // [1, 3]

const numbers = [10, 20, 30];

const result = numbers.map((num, index, arr) => {
  console.log(arr);
  return `Index ${index}: ${num} in ${arr}`;
});

console.log(result);

let count = 1;

const intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;
}, 1000);



