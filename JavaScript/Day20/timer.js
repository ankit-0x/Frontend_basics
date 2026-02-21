const obj = document.getElementById('countdown');
const main = document.getElementById('root');

main.style.height = "100vh";
main.style.position = "relative";


function timing(){
    const date1 = new Date();
    const date2 = new Date("2028-07-14");

    const date = date2-date1;

    const days = Math.floor(date/(1000*60*60*24));
    const hours = Math.floor(date/(1000*60*60)%24);
    const minutes = Math.floor(date/(1000*60)%60);
    const seconds = Math.floor(date/(1000)%60);

    obj.style.position = "absolute";
    obj.style.bottom = "200px";
    obj.style.left = "150px";

    const d = document.getElementById('day');
    d.innerHTML= days; 
    d.style.fontSize="150px";
    d.style.fontWeight="bold";

    const h = document.getElementById('hour');
    h.innerHTML= hours; 
    h.style.fontSize="80px";
    h.style.fontWeight="bold";

    const m = document.getElementById('min');
    m.innerHTML= minutes; 
    m.style.fontSize="80px";
    m.style.fontWeight="bold";

    const s = document.getElementById('sec');
    s.innerHTML= seconds; 
    s.style.fontSize="80px";
    s.style.fontWeight="bold";

    obj.style.display="flex";

    const t = document.getElementById('time');
    t.style.position = "absolute";
    t.style.display = "flex";
    t.style.bottom = "80px";
    t.style.left = "150px";
}

setInterval(timing,1000);

const obj1 = document.getElementById('title');
obj1.style.position = "absolute";
obj1.style.left = "50px";
obj1.style.top= "20px";


const head = document.getElementById('heading');
head.style.fontSize = "30px";
