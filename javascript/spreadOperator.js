const hobbies = ["Sports", "Cooking", "Music"];
const user = {
    name: "Erickson",
    age: 24,
}

const newHobbies = ["Reading"];

//* Using spread operator on arrays
const mergedHobbies = [...hobbies, ...newHobbies]
// The (...) is called the spread operator.
// It pulls out values from an array, and adds them as comma separated values
// to a new array.

const mergedHobbies2 = [hobbies, newHobbies] // this will only output 2 arrays separately

//* Using spread operator on objects

const extendedUser = {
    isAdmin: true,
    ...user, // this will add the user to the this object
    // You'll get a new user with a isAdmin key.
}
// Output in console: {isAdmin: true, name: 'Erickson', age: 24}
