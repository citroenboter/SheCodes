// >> Date and Time
let currentDate = new Date();
//Honestly, they should just... Have this as an option by now.
let mins = ("0" + currentDate.getMinutes()).slice(-2);
let hrs = ("0" + currentDate.getHours()).slice(-2);
let displayDate = document.querySelector("p.display-date");
let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
displayDate.innerHTML = `${dayNames[currentDate.getDay()]} ${hrs}:${mins}`;

// >> Fetch Weather
function displayWeather(response) {
  document.querySelector("#city-header").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

// >> Search bar script

function searchCity(city) {
  //selects the input from the search bar
  let apiKey = "34ae1065362d42545661451bda2b8a1f";
  let apiURLCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURLCurrent).then(displayWeather);
}

function submitHandler(event) {
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", () => {
  submitHandler();
});

//Current temp

function fetchCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(localWeather);
}

let getLocation = document.querySelector("#get-location");
getLocation.addEventListener("click", () => {
  fetchCurrentLocation();
});

function localWeather(location) {
  let latitude = location.coords.latitude;
  let longitude = location.coords.longitude;

  let apiKey = "34ae1065362d42545661451bda2b8a1f";
  let apiURLCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiURLCurrent).then(displayWeather);
}
