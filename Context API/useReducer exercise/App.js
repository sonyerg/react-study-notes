import React from "react";

export function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  } else if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    return { count: 0 };
  }

  return state;
}

function App() {
  const [counterState, counterDispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  function handleIncrement() {
    counterDispatch({
      type: "INCREMENT",
    });
  }

  function handleDecrement() {
    counterDispatch({
      type: "DECREMENT",
    });
  }

  function handleReset() {
    counterDispatch({
      type: "RESET",
    });
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
