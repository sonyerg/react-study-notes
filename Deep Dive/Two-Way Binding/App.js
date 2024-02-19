import React from "react";
import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [feedback, setFeedback] = React.useState("");
  const [name, setName] = React.useState("");

  function handleFeedbackChange(event) {
    setFeedback(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleFeedbackChange} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleNameChange} value={name} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={name} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
