// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // Make a copy of the records object to avoid modifying the original
  const updatedRecords = { ...records };

  // If value is an empty string, delete the given prop property from the album
  if (value === "") {
    delete updatedRecords[id][prop];
  } else if (prop !== "tracks") {
    // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop
    updatedRecords[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    // If prop is tracks and value isn't an empty string
    if (!updatedRecords[id].hasOwnProperty("tracks")) {
      // If the album doesn't have a tracks property, create an empty array and add value to it
      updatedRecords[id].tracks = [value];
    } else {
      // If the album already has a tracks property, add value to the end of the album's existing tracks array
      updatedRecords[id].tracks.push(value);
    }
  }

  // Always return the entire updated records object
  return updatedRecords;
}

// Example usage
const updatedCollection = updateRecords(
  recordCollection,
  5439,
  "artist",
  "ABBA"
);

console.log(updatedCollection);
