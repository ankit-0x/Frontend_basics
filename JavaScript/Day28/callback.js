// function fetchDetails(){
//     console.log("Fetching User Details.......................");
//     setTimeout(()=>{
//         console.log("Data Fetched Successfully.");
//         // assume this data is fetched
//         let obj = {
//             name: "Ankit Kumar",
//             age: 20,
//             rollNumber: 71
//         };

//         greet(obj.name);
//     },2000);
// }
// function fetchDetails1(){
//     console.log("Fetching User Details.......................");
//     setTimeout(()=>{
//         console.log("Data Fetched Successfully.");
//         // assume this data is fetched
//         let obj = {
//             name: "Ankit Kumar",
//             age: 20,
//             rollNumber: 71
//         };

//         meet(obj.name);
//     },2000);
// }

//     function greet(name){
//         console.log(`Hello ${name}`);
//     }
//     function meet(name){
//         console.log(`Hello ${name}, I will meet you in Delhi`);
//     }

//     fetchDetails();
//     fetchDetails1();

function fetchDetails(callback) {
  console.log("Fetching User Details.......................");
  setTimeout(() => {
    console.log("Data Fetched Successfully.");
    // assume this data is fetched
    let obj = {
      name: "Ankit Kumar",
      age: 20,
      rollNumber: 71,
    };

    callback(obj);
  }, 2000);
}

function greet(obj) {
  console.log(`Hello ${obj.name}`);
}
function meet(obj) {
  console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

// fetchDetails(greet);
fetchDetails(meet);
