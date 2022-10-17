let weather = {
  paris: {
    name: "Paris",
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    name: "Tokyo",
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    name: "Lisbon",
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    name: "San Francisco",
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    name: "Oslo",
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter a city");
city = city.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let tempCelcius = `${Math.round(temperature)}°C`;
  let tempFahrenheit = `${Math.round(temperature * 1.8 + 32)}°F`;
  let humidity = `${weather[city].humidity}%`;
  alert(
    `It is currently ${tempCelcius} | ${tempFahrenheit} in ${weather[city].name}, with a humidity of ${humidity}.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city.replace(
      " ",
      "+"
    )}`
  );
}
