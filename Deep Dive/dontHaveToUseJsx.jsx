// this is how you would write in React(jsx).
// html inside a javascript code
function Example() {
  return (
    <div id="content">
      <p>Hello World!</p>
    </div>
  );
}
// Requires build process and code transformation

// but you can also write in pure js, this is how:
import React from "react";

function Example2() {
  return React.createElement(
    "div", // component type
    { id: "content" }, // props object; sets component props
    React.createElement("p", null, "Hello World!") //child component
  );
}
// this works without process and transformation
