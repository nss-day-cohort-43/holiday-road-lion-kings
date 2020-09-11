import { dropDownMenu, hoverEvent } from "./UserInterface/user.js";
import { StateSelect } from "./state/StateSelect.js"
import { EaterySelect } from "./eateries/EaterySelect.js";
import { getParks } from "./parks/ParkProvider.js";





dropDownMenu();
hoverEvent();
StateSelect();
EaterySelect();
getParks();
