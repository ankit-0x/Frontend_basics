const form = document.querySelector("form");

// form.addEventListener("click",(event)=>{
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
// })

// form.addEventListener("input",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("change",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("focus",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("focusin",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("focusout",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("click",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("dblclick",(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("submit",(event)=>{
//     console.log("form Submitted");
// })

// form.addEventListener("reset",(event)=>{
//     console.log("Form reset");
// })

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const first = document.getElementById('first');
//     console.log(first.value);
//     const second = document.getElementById('second');
//     console.log(second.value);
//     const third = document.getElementById('third');
//     console.log(third.value);

//     const result = document.getElementById('result');
//     result.innerText =`Name: ${first.value} ${second.value} \nAge: ${third.value}`;
//
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  console.log(Array.from(data.keys()));
  console.log(Array.from(data.values()));

  for (let key of data.keys()) {
    console.log(key);
  }
  for (let value of data.values()) {
    console.log(value);
  }
  for (let arr of data.entries()) {
    console.log(arr);
  }
  for (let [key, value] of data.entries()) {
    console.log(key, value);
  }
});
