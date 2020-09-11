// import { dropDownMenu } from "./UserInterface/user.js";
import { StateSelect } from "./state/StateSelect.js"
import { useWeather, getWeather } from "./weather/WeatherProvider.js";
// dropDownMenu();

useWeather();
getWeather(36.1627, -86.7816);

StateSelect();