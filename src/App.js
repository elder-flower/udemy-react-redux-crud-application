import React, { useState } from "react";
import './index.css';

// App コンポーネントが再レンダーする度に再レンダーされる
function Child({ count }) {
  console.log("render Child");
  return <p>Child: {count}</p>;
}

export default function App() {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}