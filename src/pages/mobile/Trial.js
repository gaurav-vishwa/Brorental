import React from "react";
import { useId, useState } from "react";

const Trial = () => {
  const id = useId();
  const [input, setInput] = useState("");
  console.log(id);
  return (
    <div>
      <label htmlFor={id}>Please specify:</label>
      <input id={id} value={input} onInput={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default Trial;
