import React from "react";

function App() {
  const [choice, setChoice] = React.useState(null);

  let cssClass;

  if (choice === "yes") {
    cssClass = "highlight-green";
  } else if (choice === "no") {
    cssClass = "highlight-red";
  }

  return (
    <div id="app">
      <h1 className={cssClass}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

/*
function App() {
  const [choice, setChoice] = React.useState(null);
 
  let textColor = 'white';
 
  if (choice === 'yes') {
    textColor = 'green';
  } else if (choice === 'no') {
    textColor = 'red';
  }
 
  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}
*/
