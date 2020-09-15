import { stateToggle, stateHoverEvent } from "./UserInterface/user.js";
import { StateSelect } from "./state/StateSelect.js"
import { EaterySelect } from "./eateries/EaterySelect.js";
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import { stateSelectPark } from "./parks/ParkSelect.js";
import { parkToggle } from "./UserInterface/park.js";
import { attractionToggle } from "./UserInterface/attraction.js";
import { eateryToggle } from "./UserInterface/eatery.js";
import { ItineraryPreview } from "./itinerary/ItineraryPreview.js";








stateToggle();
stateHoverEvent();
StateSelect();

parkToggle();
stateSelectPark();

attractionToggle();
AttractionSelect();

eateryToggle();
EaterySelect();

ItineraryPreview();



