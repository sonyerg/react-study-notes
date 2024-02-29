// Setup
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj1["an entree"]; // Change this line
const drinkValue = testObj1["the drink"]; // Change this line

//* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.
// Setup
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj2[playerNumber]; // Change this line

//* Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line
myDog.name = "Happy Coder";

//* Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog2.bark = "woof";

//* Delete the tails property from myDog. You may use either dot or bracket notation.
// Setup
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog3.tails;

//* Using Objects for lookups

//* Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//* Testing Objects for Properties

// Example:
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: "hat", bottom: "pants" }, "top"); // true
checkForProperty({ top: "hat", bottom: "pants" }, "middle"); // false

// Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed
// to the function parameter checkProp.
// If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
