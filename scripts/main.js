import { dropDownMenu, hoverEvent } from "./UserInterface/user.js";
import { StateSelect } from "./state/StateSelect.js"
import { useWeather, getWeather } from "./weather/WeatherProvider.js";
// dropDownMenu();

useWeather();
getWeather();




dropDownMenu();
hoverEvent();
StateSelect();