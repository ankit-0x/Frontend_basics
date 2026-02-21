// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//      resolve("Hello Everyone");
//   }, 2000);
// });

// console.log(p1);

// p1.then(value=>console.log(value));

// async function greet() {
//     const data = await p1;
//     console.log(data);
// }

// greet();

// async function greet() {
//   const data1 = await p1;
//   console.log(data1);

//   const data2 = await p1;
//   console.log(data2);
// }

// greet();


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve("First Promise Resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve("Second Promise Resolved");
  }, 5000);
});

async function greet() {
  const data1 = await p1;
  console.log(data1);

  const data2 = await p2;
  console.log(data2);
}
greet();
