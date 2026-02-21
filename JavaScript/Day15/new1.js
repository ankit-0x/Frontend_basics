const set = new Set([1,2,3]);
const arr = Array.from(set);
console.log(arr);


const x = 10;

function a() {
  const y = 20;

  function b() {
    const z = 30;
    console.log(x, y, z); // 10, 20, 30
  }

  b();
}

a();

const fruitColors = new Map([
  ['apple', 'red'],
  ['banana', 'yellow'],
  ['grape', 'purple']
]);
console.log(fruitColors);

const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map);

// const fruits = new Map([
//     ['apple', 'red'],
//     ['banana', 'yellow']
// ]);

// for (const value of fruits) {
//     console.log(value);
// }

// for (const key of fruits.keys()) console.log(key);
// for (const value of fruits.values()) console.log(value);
// for (const value of fruits.entries()) console.log(value);

const capitals = new Map([
  ['India', 'New Delhi'],
  ['France', 'Paris'],
  ['Japan', 'Tokyo']
]);

// Keys
const keysIterator = capitals.keys();
console.log(keysIterator); // MapIterator { 'India', 'France', 'Japan' }
console.log([...keysIterator]); // ['India', 'France', 'Japan']

// Values
const valuesIterator = capitals.values();
console.log([...valuesIterator]); // ['New Delhi', 'Paris', 'Tokyo']

// Entries
const entriesIterator = capitals.entries();
console.log([...entriesIterator]); 
// [['India','New Delhi'], ['France','Paris'], ['Japan','Tokyo']]



