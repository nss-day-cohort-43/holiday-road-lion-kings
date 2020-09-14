import { useEateries, getEateries } from "./EateryProvider.js";
import { eateryDetails } from "../detailsArea/eateryDetailsHTML.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".eateryInfo");

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("eatery--")) {
    const [prefix, eateryId] = event.target.id.split("--");

    const eateryEvent = new CustomEvent("eaterySelected", {
      detail: {
        eatery: eateryId,
      }
    })
    getEateries()
    .then(() => {
      let eateries = useEateries()
      eateries.map(eatery => {
        if(eatery.businessName === eateryId){
          eateryDetails(eatery);
        }
      })
    })

    eventHub.dispatchEvent(eateryEvent);
  }
});

export const EaterySelect = () => {
  eventHub.addEventListener("stateChosen", e => {
  
    getEateries()
    .then(() => {
    const eateryArray = useEateries();
    eateryArray.map(eat => {
      if(eat.state === e.detail.stateChosen) {
        render(eat)
      }
    })
  })
})}

const render = (eatery) => {
  return contentTarget.innerHTML = 
    `<p id="eatery--${eatery.businessName}">${eatery.businessName}
    - ${eatery.state}, ${eatery.city}</p>`
}
        
        
  