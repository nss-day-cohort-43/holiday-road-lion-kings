import { getEateries, useEateries } from "./EateryProvider.js";
import { EateryHTML } from "./EateryHTML.js";

const eventHub = document.querySelector(".container");
// needs place on dom to render HTML

export const EateryDetails = () => {
    getEateries().then(() => {
    const appStateEateries = useEateries();
    renderEateries(appStateEateries);
  });
};

const renderEateries () => {
    
}
