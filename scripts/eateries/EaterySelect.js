import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector("#eatery");

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "") {
        const selectedEatery = event.target.value;

        const customEvent = new CustomEvent("eaterySelected", {
            detail: {
                eatery: selectedEatery,
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (eateryCollection) => {
    contentTarget.innerHTML = `
      <select class="dropdown" id="eaterySelect">
                  <option value="0">Find a Restaurant!</option>
                  ${eateryCollection.map((eateryObj) => {
                    return `<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`;
                  })}
              </select>
      `;
  };
  
  export const EaterySelect = () => {
    getEateries().then(() => {
      const eateryArray = useEateries();
      render(eateryArray);
    });
  };
