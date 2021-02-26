import { tips } from "./tips.js";
import { getTips } from "./tipsData.js";
/**Define the steps that need to be taken
 * 1. Get the array of fish
 * 2. Get a reference to the location on the DOM(document object model) where you want to display the list of fish
 * 3. Declare a variable to hold on to fish html representations
 * 4. Loop over the array of fish and for each one, invoke the fish component which returns html representation
 * 5. Finally set the dome equal to the variable containing the fish html representation
**/

export const tipsList = () => {
    //Get array of fish
    const allTips = getTips();
    //get reference to location on DOM
    const DOMLocation = document.querySelector("#tipsBorder");
    //declare a variable
    let tipsHTMLReperesentations = "";
    //Loop over the array
    for(const oneThingFromMartin of allTips) {
        //do something with oneThingFromTheSea
        tipsHTMLReperesentations += tips(oneThingFromMartin);
    };
    DOMLocation.innerHTML += `${tipsHTMLReperesentations}`;
};
