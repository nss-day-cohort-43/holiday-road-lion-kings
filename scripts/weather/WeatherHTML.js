// Module to generate HTML for weather card

import { temperatureConverter } from "./WeatherCard.js"
import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from "../parks/ParkProvider.js"


const eventHub = document.querySelector(".container");

// eventHub.addEventListener("parkChosen", e => {
//     let parks = useParks()
//     parks.map(park => {
//     if(park.fullName === e.detail.parkChosen) {
//         console.log(e.detail.parkChosen)
//         getWeather(park.latitude, park.longitude)
//         .then(() => {
//            let weatherArray = useWeather();
//            console.log(weatherArray);
//         })
//     }  
// })
// })

export const WeatherHTML = (weatherObj) => {
    return `
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${temperatureConverter(weatherObj)} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${temperatureConverter(weatherObj)} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${temperatureConverter(weatherObj)} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${temperatureConverter(weatherObj)} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${temperatureConverter(weatherObj)} &#176</p>
            <p class="weather__description">${weatherObj}</p>
        </div>
    `
}