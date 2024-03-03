let userMessage = "Hello!"; // Primitive value. stored like stack 'push on top'
//You can't edit existing values, but you can always produce new ones.
userMessage = userMessage.concat("!!!");
console.log(userMessage); // Output: 'Hello!!!!'

// experiment
let userMessage2 = ["Hello", "World"];

userMessage2 = userMessage2.map((message) => {
  message += "!";
  return message;
});

console.log(userMessage2); // Output: ["Hello!", "World!"]

// *Objects and arrays are reference type
// const mean that the value can't be overwritten, but can be edited or store more values
// You're storing address in this constant. You're editing the value behind that address.
const hobbies = ["Sports", "Reading"];
hobbies.push("Coding");
console.log(hobbies); //Output: ['Sports', 'Reading', 'Coding']
