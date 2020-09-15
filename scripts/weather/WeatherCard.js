//Module Goal:
    //Using the currently selected park's weather,
    //prepare the data and display it on the DOM.

import { useWeather } from "./WeatherProvider.js";
import { WeatherHTML } from "./WeatherHTML.js"

//Render the card to DOM. Invoke this function in ParkSelect.js, when we invoke getWeather().
export const WeatherCardMaker = () => {
    const weatherArray = useWeather();
    renderWeather(weatherArray)
}

//Convert temp from Kelvin(?) to Fahrenheit
export const temperatureConverter = (temp) => {
    let Fahrenheit = (temp * 9/5) - 459.67
    Fahrenheit = Math.round(Fahrenheit)
    return Fahrenheit
}

//Split data by time, then generate the HTML
//Currently splitting by 12pm
const renderWeather = (weatherArray) => {
    const domTarget =  document.querySelector(".weather")
    let HTMLContainer = ""
    weatherArray.map(weatherObj => {
        const [date, time] = weatherObj.dt_txt.split(" ");
        if (time === "15:00:00") {
            HTMLContainer += WeatherHTML(date, weatherObj)
        }
    })
    domTarget.innerHTML =  HTMLContainer;
}