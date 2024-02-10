
//* Destructuring array
// const userData = ["Erickson", "Guinto"];
// const firstfirstName = userData[0];
// const lastfirstName = userData[1];

//* use this instead:
// const [firstName, lastName] = ["Erickson", "Guinto"];
// console.log(firstName);
// console.log(lastName);

//* Destructuring objects
// you have to use property names in the object
// but you can put alias in the destructuring side
const { name: userName, age } = {
    name: "Erickson",
    age: 24,
  };
  
console.log(`${userName}, ${age}`);

//* Destructuring in function parameter List

// Example: 
  function storeOrder1(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
  }

  // Instead of accessing the order properties via the "dot notation" inside 
  // the storeOrder function body, you could use destructuring like this:
  function storeOrder2({id, currency}){
    localStorage.setItem('id', id)
    localStorage.setItem('currency', currency)
  }
  // id and currency are "pulled out" of the incoming object 
  // (i.e., the object passed as an argument to storeOrder).

  // It's very important to understand, that storeOrder still only takes one parameter in this 
  // example! It does not accept two parameters. Instead, it's one single parameter - 
  // an object which then just is destructured internally.
 
  // The function would still be called like this:
  storeOrder2({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!