const info = document.getElementById('info');
const place = document.getElementById('location');
const button = document.getElementById('button');
const description = document.getElementById('description')



button.addEventListener('click', getWeather);
function getWeather() {
    // let long;
    // let lat;
    // console.log(navigator.geolocation.getCurrentPosition(data => console.log(data)))
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(data => {
            long = data.coords.longitude;
            lat = data.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=068ce3f2452a3741b27d326c99845d12&units=metric`;

            fetch(api)
            .then(response => response.json())
            .then (data => {
                console.log(data);

               place.innerHTML = `${data.timezone}`;
                // let fahrenheit = `${data.current.temp}`;
                // let celsiusCalc = (fahrenheit - 32) * 5;
                // let finalCelsius = celsiusCalc / 9;
                // let abs = Math.floor(finalCelsius)
                temperature.innerHTML = `${data.current.temp} Celsius `;
                description.innerHTML = `${data.current.weather[0].description}`
               

               
                
            });
        });

function setIcons(icon, iconID) {

}


    }  else {
        info.innerHTML = `<h3>Location cannot be displayed because user has not allowed geolocation</h3>`
    }

}



  