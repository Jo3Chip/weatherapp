var submit = document.getElementById('submit');
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var locationInput = document.getElementById("location");
var units = '&units=metric'
var apiKey = '&appid=3f265935a23a9aeba683d087c268057d'
var weatherDisplay = document.getElementById('description');
var weatherMain = document.getElementById('main');
var weatherTemp = document.getElementById('temp');
var weatherData;
var container = document.getElementById('full-container');
var background = {
    "Thunderstorm": "url('img/thunderstorm.jpg')",
    "Drizzle": "url('img/drizzle.jpg')",
    "Rain": "url('img/rain.jpg')",
    "Snow": "url('img/snow.jpg')",
    "Mist": "url('img/mist.jpg')",
    "Smoke": "url('img/smoke.jpg')",
    "Haze": "url('img/haze.jpg')",
    "Dust": "url('img/dust.jpg')",
    "Fog": "url('img/fog.jpg')",
    "Sand": "url('img/sand.jpg')",
    "Ash": "url('img/ash.jpg')",
    "Squall": "url('img/squall.jpg')",
    "Tornado": "url('img/tornado.jpg')",
    "Clear": "url('img/clear.jpg')",
    "Clouds": "url('img/clouds.jpg')"
}

function search() {
    var url = baseURL + locationInput.value + units + apiKey;
    console.log(url);
    fetch(url)
    .then(response => {
        if(!response.ok){
            alert('Please Select Another Location');
        }
        else {
            console.log('Successful');
            return response.json();
        }
    })
    .then(data => weatherData = data)
    .then(() => console.log(weatherData))
    .then(() => update())
    .then(() => backgroundChange())
    .catch(error => console.log('ERROR'))
    
}

function update() {
    weatherMain.innerHTML = weatherData.weather[0].main;
    weatherDisplay.innerHTML = weatherData.weather[0].description;
    weatherTemp.innerHTML = weatherData.main.temp;
}

function backgroundChange() {
    for (var key in background){
        if(weatherMain.innerHTML == key){
            container.style.backgroundImage = background[key]
            console.log("key " + key + " has value " + background[key]);
        }
        else{
            console.log('weather not found');
        }
    }
}


submit.addEventListener('click', () => {
    search();
})

