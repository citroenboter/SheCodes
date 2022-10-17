// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log([weekDays[0], weekDays[6]].join(" and "));
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
console.log(weekDays.slice(2));
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
weekDays.forEach(function (day) {
  console.log(`Temperature on ${day} is 18 degrees`);
});
