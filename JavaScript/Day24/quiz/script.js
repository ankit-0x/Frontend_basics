const form = document.querySelector("form");
// const ogAnswers = ["New Delhi","Mahatma Gandhi","Ganga","Tiger","15 August","Lotus","Taj Mahal","Jawaharlal Nehru","Rajasthan","No national language"];
const ogAnswers = {
  q1: "New Delhi",
  q2: "Mahatma Gandhi",
  q3: "Ganga",
  q4: "Tiger",
  q5: "15 August",
  q6: "Lotus",
  q7: "Taj Mahal",
  q8: "Jawaharlal Nehru",
  q9: "Rajasthan",
  q10: "No national language"
};

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const data = new FormData(form);

    // const answers = Array.from(data.values());

    // let result = 0;
    // for(let i=0;i<answers.length;i++){
    //     if(answers[i]===ogAnswers[i]){
    //         result++;
    //     }
    // }


    let result =0;
    for(let [key,value] of data.entries()){
        if(value === ogAnswers[key]){
            result++;
        }
    }
    const res = document.getElementById('result');
    res.innerText = `${result} correct out of 10`;
});