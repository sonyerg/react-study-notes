import React from "react";

// don't change the Component name "App"
export default function App() {
  const [showStyle, setStyle] = React.useState(false);

  function handleClick() {
    setStyle(true);
  }

  return (
    <div>
      <p className={showStyle ? "active" : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
