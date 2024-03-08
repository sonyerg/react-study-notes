import ReactDOM from "react-dom";

// To optimize the final DOM structure, the rendered content of the Toast component
// should be injected directly into the <body> element (which could be selected via
// document.querySelector('body')). It should NOT be rendered in the place where
// the <Toast /> component is used in the JSX code!

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector("body")
  );
}
