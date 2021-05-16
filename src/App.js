import React, { useState, useEffect } from "react";
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

  useEffect( () => {
    if (count > 0) {
      if (count % 3 === 0) {
        display || setDisplay(true);
      } else {
        display && setDisplay(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div className="App">
      <div>
        <span>{count}!</span>
        {display && <span>🤪</span>}
      </div>
      <button onClick={onClickCountUp}>Count UP!</button>
      <button onClick={onClickSwitchDisplay}>On / Off</button>
    </div>
  );
}

export default App;
