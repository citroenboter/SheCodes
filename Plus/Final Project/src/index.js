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
let today = dayNames[currentDate.getDay()];
displayDate.innerHTML = `${today} ${hrs}:${mins}`;

// >> Fetch Weather
function displayCurrentWeather(response) {
  document.querySelector("#city-header").innerHTML = response.data.city;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.temperature.current
  );
  document.querySelector("#current-humidity").innerHTML =
    response.data.temperature.humidity;
  document.querySelector("#current-wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#current-description").innerHTML =
    response.data.condition.description;
  document
    .querySelector("#icon-current")
    .setAttribute("src", response.data.condition.icon_url);

  coords = response.data.coordinates;

  getForecast(coords);
}

//forecast gives a weird bug. I need to deliver so I'll add this later even after I'm already done ;)

// function displayForecast(response) {
//   let forecast = response.data.daily;
//   let forecastContainer = document.querySelector("#forecast-container");
//   forecast.forEach(function (forecastDay, index) {
//     if (index < 5) {
//       forecastContainer.innerHTML += `<div class="forecast col"><img
//       src="${forecastDay.condition.icon_url}"
//     />
//     <h3 class="card-subtitle">${dayNames[index]}</h3>
//     <div class="card-text">
//       <strong
//         ><span class="temperature">${Math.round(
//           forecastDay.temperature.maximum
//         )}</span
//         ><span class="temp-unit">°C</span></strong
//       >
//       / <span class="temperature">${Math.round(
//         forecastDay.temperature.minimum
//       )}</span><span class="temp-unit">°C</span>
//     </div>
//     </div>`;
//     }
//     if (index > 5) {
//       forecastContainer.removeChild(forecastContainer.querySelectorAll());
//     }
//   });
// }

function getForecast(coordinates) {
  let apiKey = "bc8b34dt7ae2e53dfe98ff6od201f7a2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayForecast);
}

// >> Search bar script

function searchCity(city) {
  //selects the input from the search bar
  let apiKey = "bc8b34dt7ae2e53dfe98ff6od201f7a2";
  let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}
&units=${unit}`;
  axios.get(apiUrlCurrent).then(displayCurrentWeather);
}

function submitHandler(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", submitHandler);

//Current temp

function fetchCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(localWeather);
}

let getLocation = document.querySelector("#get-location");
getLocation.addEventListener("click", fetchCurrentLocation);

function localWeather(location) {
  let latitude = location.coords.latitude;
  let longitude = location.coords.longitude;

  searchByCoords(latitude, longitude);
}

function searchByCoords(latitude, longitude) {
  let apiKey = "bc8b34dt7ae2e53dfe98ff6od201f7a2";
  let apiUrlCurrent = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrlCurrent).then(displayCurrentWeather);
}

//Freedom units

let unit = "metric";
let coords = {};

function convertFreedom() {
  document
    .querySelectorAll(".temp-unit")
    .forEach((node) => (node.innerHTML = "°F"));
  document
    .querySelectorAll(".speed-unit")
    .forEach((node) => (node.innerHTML = "mph"));
}
let freedomUnits = document.querySelector("#freedom-units");
freedomUnits.addEventListener("click", () => {
  unit = "imperial";
  convertFreedom();
  searchByCoords(coords.latitude, coords.longitude);
});

function convertNormal() {
  document
    .querySelectorAll(".temp-unit")
    .forEach((node) => (node.innerHTML = "°C"));
  document
    .querySelectorAll(".speed-unit")
    .forEach((node) => (node.innerHTML = "km/h"));
}

let normalUnits = document.querySelector("#normal-units");
normalUnits.addEventListener("click", () => {
  unit = "metric";
  convertNormal();
  searchByCoords(coords.latitude, coords.longitude);
});

searchCity("Weed");
