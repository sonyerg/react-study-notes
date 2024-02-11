function init(name) {
  function greet() {
    console.log("Hi " + name);
  }
  greet();
  // you can call greet inside this function because it is declared inside.
  // So it is a local variable or function in this case
}

// but you cannot call greet here
greet(); //error: greet is not defined

init("Erick");
