

const axios = require('axios');
const prompt = require('prompt');


function getWeather(city) {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=fc71a4a69bc4a5db42d4b84e5087235e`)
  .then(function (response) {
    console.log('Current temperature:', response.data["main"]["temp"] + " C");
    console.log('Pressure:', response.data["main"]["pressure"]);
    console.log('Wind speed:', response.data["wind"]["speed"]);


  })
  .catch(function (error) {
    console.log(error);
  });
}

  console.log('Welcome to the Weather checker');
  console.log('Please enter a city to check:');

  prompt.start();

  prompt.get(['city'], function (err, result) {
    getWeather(result.city);
  });
