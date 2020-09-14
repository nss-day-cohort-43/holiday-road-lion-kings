import { useWeather, getWeather } from "./WeatherProvider.js";


export const weatherInfo = () => {
getWeather()
.then(() =>
useWeather().map(weather => {
    console.log(weather)
    console.log(weather.dt_txt)
    console.log(weather.main.temp)
    weather.weather.map(weather => {
        console.log(weather)
    })

    
}))
}

export 

const temperatureConverter = (temp) => {
    let Fahrenheit = temp * 9/5 - 459.67
    Fahrenheit = Math.round(Fahrenheit)
    console.log(Fahrenheit)
}