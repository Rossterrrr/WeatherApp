'use strict';
window.addEventListener('load',() => {
    const timezone = document.querySelector('h1');
    const temperature = document.querySelector('h2');
    const descr = document.querySelector('h3');
    let lat = 0,lon = 0;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat,lon);
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=c6ec94e33b50d27ffa59ae98e91d6886`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                timezone.textContent = data.name;
                temperature.textContent = Math.floor(data.main.temp);
                descr.textContent = `Oщущается как ${Math.floor(data.main.feels_like)}`
                const skycons = new Skycons({"color":"white"})
                skycons.add("icon1",Skycons.PARTLY_CLOUDY_DAY);
                skycons.play();
            })

        });
    }
    
});
