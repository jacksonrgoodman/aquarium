import { locations } from "./locations.js";
import { getLocations } from "./locationsData.js";
/**Define the steps that need to be taken
 * 1. Get the array of fish
 * 2. Get a reference to the location on the DOM(document object model) where you want to display the list of fish
 * 3. Declare a variable to hold on to fish html representations
 * 4. Loop over the array of fish and for each one, invoke the fish component which returns html representation
 * 5. Finally set the dome equal to the variable containing the fish html representation
**/

export const locationsList = () => {
    //Get array of fish
    const allLocations = getLocations();
    //get reference to location on DOM
    const DOMLocation = document.querySelector("#locationsBorder");
    //declare a variable
    let locationsHTMLReperesentations = "";
    //Loop over the array
    for(const onePlaceFromMartin of allLocations) {
        //do something with oneThingFromTheSea
        locationsHTMLReperesentations += locations(onePlaceFromMartin);
    }
    DOMLocation.innerHTML += `${locationsHTMLReperesentations}`;
    console.log(`${locationsHTMLReperesentations}`);
    console.log("Can you see this? Locations");
}