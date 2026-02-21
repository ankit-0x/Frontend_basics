const button = document.getElementById('searchBtn');

button.addEventListener('click',()=>{
    const city = document.getElementById('cityInput').value;

    function weatherUpdate(data){
        document.getElementById('location').innerText = `${data.location.name},${data.location.region},${data.location.country}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp_c}c`;
        document.getElementById('description').innerText = `Condition: ${data.current.condition.text}`;
        document.getElementById('humidity').innerText = `${data.current.humidity}%`;
        document.getElementById('wind').innerText = `${data.current.wind_kph}kph`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=dc3b88bfc733453c9ad144255260401&q=${city}&aqi=yes`);

    prom
    .then(response=> response.json())
    .then(data=> weatherUpdate(data));
})