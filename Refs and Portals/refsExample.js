import React from "react";

//* Ensure that the click event on the <input type="file"> element is triggered whenever the <button>Pick Image</button> is clicked.

function App() {
  const openFilePicker = React.useRef();

  function handleClick() {
    openFilePicker.current.click(); // built-in click() method on the underlying input element.
  }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={openFilePicker}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
