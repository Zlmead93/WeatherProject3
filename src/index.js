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
  console.log(response.data);
 
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp);
    document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
     document.querySelector("#description").innerHTML = response.data.weather[0].description;
     document.querySelector("#feelsLike").innerHTML = Math.round(response.data.main.feels_like);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
   "src", 
   `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
function displayForecast(response) {
console.log(response.data);
let forecastElement = document.querySelector("#forecastThree");
let forecast = response.data.list[1];
forecastElement.innerHTML = `<button type="button" class="btn btn-primary" id = "forecastThree"><img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
          ${Math.round(forecast.main.temp_max)}°C</button>`
          
forecast = response.data.list[2];
forecastElement.innerHTML += `<button type="button" class="btn btn-primary" id = "forecastThree"><img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
          ${Math.round(forecast.main.temp_max)}°C</button>`
          forecast = response.data.list[3];
forecastElement.innerHTML += `<button type="button" class="btn btn-primary" id = "forecastThree"><img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
          ${Math.round(forecast.main.temp_max)}°C</button>`
          forecast = response.data.list[4];
forecastElement.innerHTML += `<button type="button" class="btn btn-primary" id = "forecastThree"><img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
          ${Math.round(forecast.main.temp_max)}°C</button>`
          forecast = response.data.list[5];
forecastElement.innerHTML += `<button type="button" class="btn btn-primary" id = "forecastThree"><img src= "http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
          ${Math.round(forecast.main.temp_max)}°C</button>`
          
          
}
function defaultCity(city) {
  let apiKey = "5dbe4b73ade41818331f8e929d9c90fe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
  apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayForecast);
}
defaultCity("London");

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enterCity").value;
  defaultCity(city);
}

let search = document.querySelector("#go");
search.addEventListener("click", searchCity);
