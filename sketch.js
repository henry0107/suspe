var weather;

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(400, 200);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var feels_like = weather.main.feels_like;
    var temp_min = weather.main.temp_min;
    // console.log("temp = ",temp );
    // console.log("humidity = ",humidity );
    // console.log("feels_like = ",feels_like );
    // console.log("temp_min = ",temp_min );
    ellipse(temp, humidity, feels_like, temp_min);
    ellipse(humidity, temp, temp_min, feels_like);
  }
}
