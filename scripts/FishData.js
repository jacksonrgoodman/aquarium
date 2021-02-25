const fishCollection = [
    {
        saltWater: true,//boolean
        harvestLocation: "Ocean",//string
        diet: "other fish",//string
        name: "Bob",//string
        species:"Guppy",//string
        inches: 3,//number
        image: "guppy.jpg"//string
    },
    {
        saltWater: true,//boolean
        harvestLocation: "Ocean",//string
        diet: "other fish",//string
        name: "Bob",//string
        species:"Guppy",//string
        inches: 3,//number
        image: "guppy.jpg"//string
    },
    {
        saltWater: true,//boolean
        harvestLocation: "Ocean",//string
        diet: "other fish",//string
        name: "Bob",//string
        species:"Guppy",//string
        inches: 3,//number
        image: "guppy.jpg"//string
    }
]
export const myName ="Jackson";

export const getFish = () => {
    return fishCollection;
}
export const namedFish = (whatIsTheName) => {
    return `Hello ${whatIsTheName}`;
}