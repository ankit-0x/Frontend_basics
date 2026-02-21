const button = document.querySelector('button');

button.addEventListener('click',()=>{
    const h = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);

    const height = h/100;

    const bmi = (weight/(height*height)).toFixed(1);

    let condition;

    if(bmi<18.5){
        condition = "underweight";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        condition = "Normal Weight";
    }
    else if(bmi>=25.0 && bmi<=29.9){
        condition = "overweight";
    }
    else if(bmi>=30.0 && bmi<=34.9){
        condition = "Class I Obesity";
    }
    else if(bmi>=35.0 && bmi<=39.9){
        condition = "Class II Obesity";
    }
    else{
        condition = "Class III Obesity";
    }

    const re = document.getElementById('result');
    re.textContent ="Your Body Mass Index (BMI) : "+bmi+" ("+condition+") ";
});