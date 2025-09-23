import React, { useState } from "react";

export const UseState = () => {
    const [count, setCount] = useState(0)

    console.log('UseState Render')
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount((value) => value + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>  
        </div>
    )
}
