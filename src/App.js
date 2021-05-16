import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  const onClickSwitchDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div className="App">
      <p>
        {count}! {display && <span>🤪</span>}
      </p>
      <button onClick={onClickCountUp}>Count UP!</button>
      <button onClick={onClickSwitchDisplay}>On / Off</button>
    </div>
  );
}

export default App;
