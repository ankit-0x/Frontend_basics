// const promises = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
// );

// console.log(promises);

// promises
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promises = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
// );

// promises
//   .then((response) => {
//     console.log(response.json());
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promises = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
// );

// promises.then((response) => {
//   const pro2 = response.json();
//   pro2.then((data) => {
//     console.log(data);
//   });
// });

// const promises = fetch(
//   "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
// );

// const pro2 = promises.then((response) => {
//   return response.json();
// });

// pro2.then((data) => {
//   console.log(data);
// });

// fetch(
//   "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

fetch(
  "http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=London&aqi=yes"
)
  .then((response) => response.json())
  .then((data) => console.log(data.current.temp_c))
  .catch((error) => console.log(error));
