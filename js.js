var longitudeCoord;
var latitudeCoord;
var country;
var city;
var wind;
var speed;
var humidity;
var pressure;
var claudiness; //descrption
var main;
var temp;
var img;

var url;

var firstHElem = document.getElementById("firstH");
var secondHElem = document.getElementById("secondH");
var pElem = document.getElementById("pElem");
var imgElem = document.getElementById("imgE");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  longitudeCoord = position.coords.longitude;
  latitudeCoord = position.coords.latitude;
  //Pass cordinates
  getWeather(longitudeCoord, latitudeCoord);
}

getLocation();

function getWeather(longitudeCoord, latitudeCoord) {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitudeCoord +
      "&lon=" +
      longitudeCoord +
      "&APPID=50c7c8e256d8581aadb566dd80b9ad8a&units=metric"
  );
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    main = ourData.weather[0].main;
    city = ourData.name;
    country = ourData.sys.country;
    temp = ourData.main.temp;
    humidity = ourData.main.humidity;
    claudiness = ourData.weather[0].description;
    pressure = ourData.main.pressure;
    speed = ourData.wind.speed;
    img = ourData.weather[0].icon;

    print(
      main,
      city,
      country,
      temp,
      humidity,
      claudiness,
      pressure,
      speed,
      longitudeCoord,
      latitudeCoord
    );
  };
  ourRequest.send();
}

function print(
  main,
  city,
  country,
  temp,
  humidity,
  claudiness,
  pressure,
  speed,
  longitudeCoord,
  latitudeCoord
) {
  firstHElem.innerHTML = "Weather in " + city + ", " + country;
  url = setUrl(img);
  imgElem.setAttribute("src", url);
  secondHElem.innerHTML=temp + " &#8451";
  pElem.innerHTML="Wind: "+ speed + " m/s<br></br>Cloudiness: "+ claudiness + "<br></br> Pressure : " + pressure +" hpa <br></br> Humidity: "+ humidity+"% <br></br> <em>Coordinates</em>: <br></br> Longitude: "+longitudeCoord+"<br></br> Latitude: "+latitudeCoord;
}


function setUrl(img){
  switch(img){
    case "01d":
    return "http://openweathermap.org/img/w/01d.png";
    case "01n":
    return "http://openweathermap.org/img/w/01n.png";
    case "02d":
    return "http://openweathermap.org/img/w/02d.png";
    case "02n":
    return "http://openweathermap.org/img/w/02n.png";
    case "03d":
    return "http://openweathermap.org/img/w/03d.png";
    case "03n":
    return "http://openweathermap.org/img/w/03n.png";
    case "04d":
    return "http://openweathermap.org/img/w/04d.png";
    case "04n":
    return "http://openweathermap.org/img/w/04n.png";
    case "09d":
    return "http://openweathermap.org/img/w/09d.png";
    case "09n":
    return "http://openweathermap.org/img/w/09n.png";
    case "10d":
    return "http://openweathermap.org/img/w/10d.png";
    case "10n":
    return "http://openweathermap.org/img/w/10n.png";
    case "11d":
    return "http://openweathermap.org/img/w/11d.png";
    case "11n":
    return "http://openweathermap.org/img/w/11n.png";
    case "13d":
    return "http://openweathermap.org/img/w/13d.png";
    case "13n":
    return "http://openweathermap.org/img/w/13n.png";
    case "50d":
    return "http://openweathermap.org/img/w/50d.png";
    case "50n":
    return "http://openweathermap.org/img/w/50n.png";
  }
}
//

//50c7c8e256d8581aadb566dd80b9ad8a
//http://api.openweathermap.org/data/2.5/weather?lat=20&lon=30&APPID=50c7c8e256d8581aadb566dd80b9ad8a&units=metric
