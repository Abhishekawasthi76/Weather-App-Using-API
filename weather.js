const apikey = "f83996f79a5da7bc8bf257748963f168";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".city");
const temprature = document.querySelector(".temp");
const hdt = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    
    var data = await response.json();

    console.log(data);

    cityName.innerHTML = data.name;
    temprature.innerHTML = Math.round(data.main.temp) + "°c";
    hdt.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "./clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "./clear.png";
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "./rain.png";
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "./drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "./mist.png";
    }

}


searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

});