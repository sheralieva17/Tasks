import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  
  const handlChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <p>Текущий текст: {text}</p>
      <input type="text" value={text} onChange={handlChange} />
    </div>
  );
};

export default App;
