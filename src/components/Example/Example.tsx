import { useState } from "react";

import styles from "./styles.css";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <h1>Template (let's count!)</h1>
      <span style={{ padding: "8px" }}>Count: {count}</span>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <div className={styles.default}>Color!</div>
    </div>
  );
};

export default Example;
