
const apikey = "d51d30e987376dbbaf49949acd8f0ce9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


var searchCity = document.querySelector(".search input")
var searchBtn = document.querySelector(".search button")
var weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    var response = await fetch(apiUrl+city+`&appid=${apikey}`);
    if(response.status == 404){

        document.querySelector(".error").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "none";

        var data = await response.json();
        
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} m/s`;

    
    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main =="Wind"){
        weatherIcon.src = "images/wind.png"
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png"
    }
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchCity.value);
})
