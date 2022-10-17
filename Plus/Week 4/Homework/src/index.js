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

// >> Search bar script

function displayCity() {
  //selects the input from the search bar
  let cityInput = document.querySelector("form #city-search");
  let cityName = document.querySelector("#city");
  if (cityInput.value === null || cityInput.value === "") {
    cityName.innerHTML = `Error: That's probably not a city`;
    console.log("Something went wrong");
  } else {
    cityName.innerHTML = `${cityInput.value}`;
    console.log("Yes, it worked!");
  }
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", () => {
  displayCity();
});

//Freedom Units

function freedom() {
  let tempStrings = document.querySelectorAll(".temperature");
  tempNums = tempStrings.map(Number);
  console.log(tempNums);
}
