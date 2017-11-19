var long;
var lat;

var longElem=document.getElementById("lon");
var latElem=document.getElementById("lat");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;

  long = position.coords.longitude;
  lat = position.coords.latitude;
  longElem.innerHTML=long;
  latElem.innerHTML=lat;
}

getLocation();


// var ourRequest = new XMLHttpRequest();
// ourRequest.open(
//   "GET",
//   "http://api.openweathermap.org/data/2.5/weather?lat=" +
//     lat +
//     "&lon=" +
//     long +
//     "&APPID=50c7c8e256d8581aadb566dd80b9ad8a&units=metric"
// );
// ourRequest.onload = function() {
//   var ourData = JSON.parse(ourRequest.responseText);
//   document.write(ourData.coord.lon);
// };
// ourRequest.send();

//50c7c8e256d8581aadb566dd80b9ad8a
//http://api.openweathermap.org/data/2.5/weather?lat=20&lon=30&APPID=50c7c8e256d8581aadb566dd80b9ad8a&units=metric
