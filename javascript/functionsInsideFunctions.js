function init(name) {
  function greet() {
    console.log("Hi " + name);
  }
  greet();
  // you can call greet inside this function because it is declared inside.
  // So it is a local variable or function in this case
}

// but you cannot call greet here
// greet(); //error: greet is not defined

init("Erick");

// Side note
// Use return when you need the function to output a value to the caller.
// Use return to exit early from a function, for example, if a certain condition is met
// and you want to stop the execution of the function without running the rest of the code.

function init2(name) {
  function greet() {
    console.log("Hi " + name);
  }
  return greet; // Return the greet function
}

const myGreetFunction = init2("Erick");
myGreetFunction(); // Now you can call greet outside of init

// In this modified example, init now returns the greet function, allowing it to be called outside
// of init via the variable it's assigned to (myGreetFunction in this case).
