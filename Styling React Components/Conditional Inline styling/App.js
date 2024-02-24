import React from "react";

function App() {
  const [style, setStyle] = React.useState("white");

  function handleClick(identifier) {
    if (identifier === "Yes") {
      setStyle("green");
    } else if (identifier === "No") {
      setStyle("red");
    }
  }

  return (
    <div id="app">
      <h1
        style={{
          color: style,
        }}
      >
        CSS is great!
      </h1>
      <menu>
        <li>
          <button onClick={() => handleClick("Yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => handleClick("No")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

// alternative:
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
