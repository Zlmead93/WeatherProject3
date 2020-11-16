let today = document.querySelector(".date");
console.log(today);
let now = new Date();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();

today.innerHTML = ` ${date} ${month} ${year} ${hours}:${minutes}`;

function displayTemp(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function defaultCity(city) {
  let apiKey = "5dbe4b73ade41818331f8e929d9c90fe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}
defaultCity("London");

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enterCity").value;
  defaultCity(city);
}

let search = document.querySelector("#go");
search.addEventListener("click", searchCity);
