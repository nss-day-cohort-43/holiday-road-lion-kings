import defaultExport from "../Settings.js"

// need an event listener to get lat and lon from park

const keys = () => {
    return defaultExport.weatherKey
}
let weather = [];

export const useWeather = () => weather.slice();

export const getWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keys()}`)
  .then((response) => response.json()
  .then((parsedWeather) => {
      weather = parsedWeather.list
      console.log(weather)
    })
  )
};
