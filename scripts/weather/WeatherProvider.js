import {} from "../Settings.js"

// need an event listener to get lat and lon from park

let weather = [];

export const useWeather = () => weather.slice();

export const getWeather = (lat, lon) => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
  exclude={part}&appid=${.weatherKey}`)
  .then((response) => response.json()
  .then((parsedWeather) => {
      weather = parsedWeather
    })
  )
};
