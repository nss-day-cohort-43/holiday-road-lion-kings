import { useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./WeatherHTML.js"

const domTarget =  document.querySelector(".weather")

export const temperatureConverter = (temp) => {
    let Fahrenheit = temp * 9/5 - 459.67
    Fahrenheit = Math.round(Fahrenheit)
    return Fahrenheit
}

//rendering function
// const weatherRenderer = (weather)