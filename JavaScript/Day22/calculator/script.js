const button = document.querySelector('button');
button.addEventListener('click',()=>{
    // Read the data
    const input1 = document.getElementById('first');
    const num1 = Number(input1.value);

    const input2 = document.getElementById('second');
    const num2 = Number(input2.value);

    // output the result
    const result = num1+num2;
    const re = document.getElementById('result');
    re.textContent = "Result: "+ result;
});