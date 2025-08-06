import React, { useState } from 'react';

function CounterFuntional() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>काउंट: {count}</h2>
      <button onClick={() => setCount(count + 1)}>बढ़ाएँ</button>
    </div>
  );
}

export default CounterFuntional