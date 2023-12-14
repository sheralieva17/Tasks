import React, { useState } from "react";
import "../styles/Task2.css";

function Task2() {
  const [isTrue, setIsTrue] = useState(false);

  const toggleBoolean = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      <button onClick={toggleBoolean}>Change</button>
      {isTrue ? (
        <div className="trueContainer">
          <h1>Верстка для True</h1>
          <button className="trueButton">true</button>
        </div>
      ) : (
        <div className="falseContainer">
          <h1>Верстка для False</h1>
          <button className="falseButton">false</button>
        </div>
      )}
    </div>
  );
}

export default Task2;
