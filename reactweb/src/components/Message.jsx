import { useState } from "react";
export default function Message() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increase() {
    setCount(count + incrementBy);
  }
  function decrease() {
    setCount(count - incrementBy);
  }
  function incrementValue() {
    setIncrementBy(incrementBy + 1);
  }
  function decrementValue() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <h2>We are increasing the value by:{incrementBy}</h2>
      <button onClick={incrementValue}>Increment value</button>
      <button onClick={decrementValue}>Decrement value</button>
    </>
  );
}
