import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleCountChange = () => setCount(count + 1);
  const handleTextChange = (e) => setText(e.target.value);
  return (
    <div>
      <div>{count}</div>
      <input value={text} onChange={handleTextChange} />
      <button onClick={handleCountChange}>Click</button>
    </div>
  );
};
