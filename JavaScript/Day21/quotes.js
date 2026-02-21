const motivationalQuotes = [
    "Believe in progress, not perfection.",
    "Every sunrise is a new invitation to try again.",
    "Strength grows in the moments you think you can’t go on but do anyway.",
    "Small steps each day lead to big achievements tomorrow.",
    "You don’t need to have it all figured out to move forward.",
    "Failures are just lessons dressed in disguise.",
    "Dream big, start small, act now.",
    "Keep your focus on what you can control, and success will follow.",
    "The only limit is the one you set for yourself.",
    "Turn your obstacles into opportunities.",
    "Consistency beats intensity every single time.",
    "Stay hungry for improvement, not validation.",
    "Growth begins the moment you step outside your comfort zone.",
    "Keep going—your future self is already proud of you.",
    "Courage is not the absence of fear, but action despite it.",
    "Today’s struggle is tomorrow’s strength.",
    "The road may be long, but every step counts.",
    "Focus on effort, and results will take care of themselves.",
    "Success favors those who stay patient and persistent.",
    "You are capable of more than you imagine."
];


const text = document.getElementById('quote');

function generate(){
    const index = Math.floor(Math.random()* motivationalQuotes.length);
    text.textContent = motivationalQuotes[index];
}

setInterval(generate,3000);

const main = document.querySelector('body');
function color(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    main.style.backgroundColor = `rgb(${r},${g},${b})`;
}

setInterval(color,3000)
