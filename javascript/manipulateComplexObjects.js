//* Manipulating Complex Objects

// Objects hold data in a property, which has a key-value format.
// In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Linkin Park",
    title: "One Step Closer",
    release_year: 2000,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

console.log(myMusic[0]["formats"][0]); // this is how you access values inside an array
// Console Output: CD

//* Accessing Nested Objects
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable.
// Use dot notation for all properties where possible, otherwise use bracket notation.
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // maps
