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
function displayCurrentWeather(response) {
  document.querySelector("#city-header").innerHTML = response.data.city;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
}

function displayForecast(response) {}

// >> Search bar script

function searchCity(city) {
  //selects the input from the search bar
  let apiKey = "bc8b34dt7ae2e53dfe98ff6od201f7a2";
  let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}
&units=metric`;
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}
&units=metric`;
  axios.get(apiUrlCurrent).then(displayCurrentWeather);
  axios.get(apiUrlForecast).then(displayForecast);
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

  let apiKey = "bc8b34dt7ae2e53dfe98ff6od201f7a2";
  let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrlCurrent).then(displayCurrentWeather);
}
