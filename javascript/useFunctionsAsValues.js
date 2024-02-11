function handleTimeout() {
  console.log("Time out!");
}

// const that has function
const handleTimeout2 = () => {
  console.log("time out again...");
};

setTimeout(handleTimeout, 2000); // function provided by the browser
// accepts two argument, first a function and second number of miliseconds js
// should wait before executing the function.
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out");
}, 4000); // you can also do this. using anonymous function.

//* Build your own function

function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("HI!");
});
