//Module Goal:
    //Using the currently selected park's weather,
    //prepare the data and display it on the DOM.

import { useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./WeatherHTML.js"

const domTarget =  document.querySelector(".weather")

export const WeatherCardMaker = () => {
    const weatherArray = useWeather();
    renderWeather(weatherArray)

}

export const temperatureConverter = (temp) => {
    let Fahrenheit = temp * 9/5 - 459.67
    Fahrenheit = Math.round(Fahrenheit)
    return Fahrenheit
}

//Take the current day/time weather obj, and generate the HTML
const renderWeather = (weatherArray) => {
    //Split the data on the dt_txt on the space.
    //The right of the space is the TIME. We want everything at 12:00:00
    weatherArray.map(weatherObj => {
        const [date, time] = weatherObj.dt_txt.split(" ");
        if (time === "12:00:00") {
            console.log(date)
        }
    })
    // WeatherHTML(weatherArray)
}