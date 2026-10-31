import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const resetCounter = () => {
    setCount(0);
    setMessage("Counter has been reset!");
  };
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={resetCounter}>
        Reset Counter
      </button>

      <p>{message}</p>
    </div>
  );
}
export default Counter;