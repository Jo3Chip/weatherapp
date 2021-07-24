var submit = document.getElementById('submit');
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
var locationInput = document.getElementById("location");
var units = '&units=metric'
var apiKey = '&appid=3f265935a23a9aeba683d087c268057d'


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
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
}

submit.addEventListener('click', () => {
    search();
})

