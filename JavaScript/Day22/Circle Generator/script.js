document.body.addEventListener("click",(event)=>{
    const circle = document.createElement('div');
    circle.className = "circle";
    const messages = ["Hi","Hey","Yo","Hola","Ciao","Hello","Sup","Howdy","Cheers","Welcome","Aloha","Namaste","Bonjour","Salam","Hallo","Hiya","G’day","Oi","Peace","Blessings","Smile","Shalom","Ahoy","Holla","Wassup","Greetings","Salute","Yoho","Halo","Chao"];


    circle.textContent = messages[Math.floor(Math.random()*messages.length)];

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;

    const r = Math.floor(Math.random()*256);    
    const g = Math.floor(Math.random()*256);    
    const b = Math.floor(Math.random()*256);    
    circle.style.background = `rgb(${r},${g},${b})`;


    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000);
})