var submit = document.getElementById('submit');
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var locationInput = document.getElementById("location");
var units = '&units=metric'
var apiKey = '&appid=3f265935a23a9aeba683d087c268057d'
var weatherDisplay = document.getElementById('description');
var weatherMain = document.getElementById('main');
var weatherTemp = document.getElementById('temp');
var weatherData;

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
    if(weatherMain.innerHTML == "Clouds"){
        document.body.style.backgroundImage = "url('cloud.jpg')";
        console.log('its cloudy');
    }
    else{
        console.log('its sunny');
        console.log(weatherMain);
    }
}


submit.addEventListener('click', () => {
    search();
})

