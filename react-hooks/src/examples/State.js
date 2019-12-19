import React, { useState } from 'react';

export default function State() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(currentCount => currentCount + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increment}>Increment</button>
    </>
  );
}
