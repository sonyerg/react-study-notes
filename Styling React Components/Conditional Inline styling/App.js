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
