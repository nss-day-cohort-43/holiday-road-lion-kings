import defaultExport from "../Settings.js"

// need an event listener to get lat and lon from park

const keys = () => {
    return defaultExport.weatherKey
}
let weather = [];

export const useWeather = () => weather.slice();

export const getWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=8c4933087c84341f4eb847eb6ea3b7f6`)
  .then((response) => response.json()
  .then((parsedWeather) => {
      weather = parsedWeather.list
    })
  )
};
