import { dropDownMenu, hoverEvent } from "./UserInterface/user.js";
import { StateSelect } from "./state/StateSelect.js"
<<<<<<< HEAD
import { getParks } from "./parks/ParkProvider.js";
// dropDownMenu();

StateSelect();
getParks()
=======
import { useWeather, getWeather } from "./weather/WeatherProvider.js";

getWeather();
useWeather();


dropDownMenu();
hoverEvent();
StateSelect();
>>>>>>> master
