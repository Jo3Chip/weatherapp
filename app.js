console.log('about to fetch the weather');
fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=3f265935a23a9aeba683d087c268057d')
.then(response => {
    return response.json;
})
.then(response => {
    console.log(response);
});