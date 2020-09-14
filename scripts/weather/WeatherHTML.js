// Module Goal: generate HTML

import { temperatureConverter } from "./WeatherCard.js"

export const WeatherHTML = (date, weatherObj) => {
    return `
        <div class="weather__day">
            <h2 class="weather__h2">${date}</h2>
            <p class="weather__degrees">${temperatureConverter(weatherObj.main.temp)}&#176</p>
            <p class="weather__description">${weatherObj.weather[0].main}</p>
        </div>
    `
}