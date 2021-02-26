console.log("Welcome to the main fishy module");

import {fishList} from "./fish/fishList.js";
import {tipsList} from './tips/tipsList.js';
import {locationsList} from './locations/locationsList.js';
import {getMostHolyFish} from './fish/fishData.js';
import {getSoldierFish} from './fish/fishData.js';
import {getUnworthyFish} from './fish/fishData.js';
fishList();
tipsList();
locationsList();
getMostHolyFish();
getSoldierFish();
getUnworthyFish();