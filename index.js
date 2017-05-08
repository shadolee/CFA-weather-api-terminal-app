

const axios = require('axios');
// const prompt = require('prompt');


function getWeather() {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&APPID=fc71a4a69bc4a5db42d4b84e5087235e`)
  .then(function (response) {
    console.log('Current temperature:', response.data["main"]["temp"] + " C");
    console.log('Pressure:', response.data["main"]["pressure"]);
    console.log('Wind speed:', response.data["wind"]["speed"]);
    console.log('Looking:', response.data["weather"]["main"]);

  })
  .catch(function (error) {
    console.log(error);
  });
}

getWeather();

  // console.log('Welcome to the Weather checker');
  // console.log('Please enter a username to check:');
  //
  // prompt.start();
  //
  // prompt.get(['username'], function (err, result) {
  //   getGithub(result.username);
  // });
