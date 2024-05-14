import React, { useState } from "react";

function MyStateCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    // setCount(count + 1);
    setCount((previousVal) => {
      return previousVal + 1;
    });
  }
  function decrement() {
    setCount(count - 1);
  }
  //   function reset() {
  //     setCount(0);
  //   }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      {/* <button onClick={reset}>0</button> */}
      <button onClick={() => setCount(0)}>reset</button>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export default MyStateCounter;
