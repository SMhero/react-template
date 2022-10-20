import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Template (let's count!)</h1>
      <span style={{ padding: "8px" }}>Count: {count}</span>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
};

export default Example;
