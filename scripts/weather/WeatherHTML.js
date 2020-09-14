export const WeatherHTML = (weatherObj) => {
    return `
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__text">Sun${weatherObj}ny</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__text">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__text">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__text">${weatherObj}</p>
        </div>
        <div class="weather__day">
            <h2 class="weather__h2">${weatherObj}</h2>
            <p class="weather__icon">${weatherObj}</p>
            <p class="weather__degrees">${weatherObj} &#176</p>
            <p class="weather__text">${weatherObj}</p>
        </div>
    `
}