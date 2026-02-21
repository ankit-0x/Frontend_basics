const form = document.querySelector("form");

const questionBank = [
  {
    question: "What is JavaScript?",
    options: ["Programming language", "Database", "Browser", "OS"],
    answer: "Programming language",
  },
  {
    question: "Which keyword declares a variable?",
    options: ["var", "let", "const", "All"],
    answer: "All",
  },
  {
    question: "Which symbol is used for comments?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//",
  },
  {
    question: "Which data type is NOT primitive?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: "Object",
  },
  {
    question: "Which method prints output to console?",
    options: ["console.log()", "print()", "log()", "output()"],
    answer: "console.log()",
  },
  {
    question: "Which operator is used for equality?",
    options: ["=", "==", "===", "All"],
    answer: "All",
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while",
  },
  {
    question: "Array index starts from?",
    options: ["0", "1", "-1", "Any"],
    answer: "0",
  },
  {
    question: "Which method adds element at end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "Which method removes last element?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: "pop()",
  },
  {
    question: "Which keyword defines a function?",
    options: ["func", "function", "def", "method"],
    answer: "function",
  },
  {
    question: "What does NaN mean?",
    options: ["No any Number", "Not a Name", "Not a Number", "None"],
    answer: "Not a Number",
  },
  {
    question: "Which operator is used for AND?",
    options: ["&&", "||", "!", "&"],
    answer: "&&",
  },
  {
    question: "Which operator is used for OR?",
    options: ["&&", "||", "!", "|"],
    answer: "||",
  },
  {
    question: "Which keyword stops a loop?",
    options: ["break", "stop", "exit", "end"],
    answer: "break",
  },
  {
    question: "Which keyword skips iteration?",
    options: ["continue", "skip", "pass", "next"],
    answer: "continue",
  },
  {
    question: "Which function converts string to integer?",
    options: ["parseInt()", "Number()", "String()", "int()"],
    answer: "parseInt()",
  },
  {
    question: "Which method joins array elements?",
    options: ["join()", "concat()", "merge()", "add()"],
    answer: "join()",
  },
  {
    question: "Which method converts object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObj()",
    ],
    answer: "JSON.stringify()",
  },
  {
    question: "Which method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.toJS()",
    ],
    answer: "JSON.parse()",
  },
];


function randomQuestions(){
    // Method 1 using sets  O(n)
    // const data = new Set();
    // while(data.size != 10){
    //     const index = Math.floor(Math.random()*questionBank.length);
    //     data.add(questionBank[index]);
    // }

    // return [...data];


    // Method 2 using sort() function  O(nlogn)
    // questionBank.sort(()=>Math.random()-0.5);
    // return questionBank.slice(0,10);

    // Method 3  Fisher Yates selection Algorithm WC:O(n) BC: O(1) AC: O(number of selected elements)

    const arr=[];
    let length = questionBank.length;

    for(let i=0;i<10;i++){
        const index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

        [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];
        length--;
    }

    return arr;
};

const problems = randomQuestions();
const original_answers ={};
problems.forEach((obj,index)=>{
    original_answers[`q${index+1}`] = obj['answer'];
    const div_element = document.createElement('div');
    div_element.className = "question";

    const para = document.createElement('p');
    para.innerText = `${index+1}. ${obj['question']}`;
    div_element.appendChild(para);
    // CREATE 4 OPTIONS
    obj['options'].forEach((data)=>{
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index+1}`;
        input.value = data;
        label.appendChild(input);
        label.appendChild(document.createTextNode(data));
        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    });
    form.appendChild(div_element);
});

const button = document.createElement('button');
button.type = "submit";
button.innerText = "Submit";

form.appendChild(button);

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const data = new FormData(form);

    let result =0;
    for(let [key,value] of data.entries()){
        if(value === original_answers[key]){
            result++;
        }
    }
    const out = document.getElementById('out');
    out.innerText = `${result} correct out of 10`;
    form.reset();
});

