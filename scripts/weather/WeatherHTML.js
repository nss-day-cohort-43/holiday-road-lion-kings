// Module to generate HTML for weather card

import { } from "./WeatherCard.js"

export const WeatherHTML = (weatherObj) => {
    return `
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__description">Sun${weatherObj}ny</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
    `
}