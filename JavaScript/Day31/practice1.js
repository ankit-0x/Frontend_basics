// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//      resolve("First Promise Resolved");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//      resolve("Second Promise Resolved");
//   }, 2000);
// });

// async function greet() {
//   const data1 = await p1;
//   console.log(data1);

//   const data2 = await p2;
//   console.log(data2);
// }
// greet();

// p1.then(value=>console.log(value));
// p2.then(value=>console.log(value));

// function test1() {
//   const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First Promise Resolved");
//     }, 5000);
//   });

//   return p1;
// }
// function test2() {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second Promise Resolved");
//     }, 5000);
//   });

//   return p2;
// }


// async function greet() {
//   const data1 = await test1();
//   console.log(data1);

//   const data2 = await test2();
//   console.log(data2);
// }
// greet();


// async function meet() {

//     return "Hello Coder";
    
// }

// meet().then(value=>console.log(value));

function test1() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise Resolved");
    }, 5000);
  });

  return p1;
}
function test2() {
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise Resolved");
    }, 8000);
  });

  return p2;
}


// async function greet() {
//     console.log("Hello i greet you");
//   const data1 = await test1();
//   console.log(data1);

//   const data2 = await test2();
//   console.log(data2);
// }
// greet();
// console.log("Hello Coder Army");
// console.log("How are YOU");


async function greet() {
    console.log("Hello i greet you")
  const [data1,data2] = await Promise.all([test1(),test2()]);
  console.log(data1);
  console.log(data2);
}
greet();