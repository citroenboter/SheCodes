// The countdown

let boobeningDate = new Date("October 5, 2022 07:00:00").getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = boobeningDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let multipleD;
  let multipleH;
  let multipleM;
  let multipleS;

  if (days === 1) {
    multipleD = "";
  } else {
    multipleD = "s";
  }

  if (hours === 1) {
    multipleH = "";
  } else {
    multipleH = "s";
  }

  if (minutes === 1) {
    multipleM = "";
  } else {
    multipleM = "s";
  }

  if (seconds === 1) {
    multipleS = "";
  } else {
    multipleS = "s";
  }

  document.getElementById(
    "countdown"
  ).innerHTML = `Only ${days} sunrise${multipleD}, ${hours} turn${multipleH} o' the hourglass, ${minutes} short song${multipleM} and ${seconds} shot${multipleS} of tequila until `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML =
      "You missed it, you fool! You missed ";
  }
}, 1000);

// The name generator

namesForKatie = [
  "Kuala Lumpur",
  "Ketamine",
  "Console Table",
  "Cornwall",
  "Cumin",
  "Cum Rag",
  "Bird Milf",
  "Krispy Kreme",
  "Croatia",
  "Koopa Troopa",
  "Ketoacidosis",
  "Krupuk",
  "Cardigan",
  "Camisole",
  "Chronic Lupus",
];

function whatsHerName(namesForKatie) {
  let nameGenerator =
    namesForKatie[Math.floor(Math.random() * namesForKatie.length)];
  document.getElementById("name").innerHTML = nameGenerator;
}

console.log(whatsHerName(namesForKatie));
