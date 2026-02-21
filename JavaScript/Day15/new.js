const result = [].reduce((acc, curr) => acc + curr,0); // 0
console.log(result);

const numbers = new Set([1, 2, 3, 2, 1]);
console.log(numbers); // Set {1, 2, 3}

const chars = new Set('hello');
console.log(chars); // Set {'h', 'e', 'l', 'o'}

const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate ignored
set.add("Ankit");
set.add(true);
set.add('a');
set.add('b');
set.add('c');
console.log(set); // Set {1, 2}


for (let value of set) {
  console.log(value);
}

// Using forEach
set.forEach((value) => console.log(value));
set.clear();
console.log(set);

const str = 'javascript';
const uniqueChars = new Set(str);
console.log(uniqueChars.size); // 9
console.log(uniqueChars); 


