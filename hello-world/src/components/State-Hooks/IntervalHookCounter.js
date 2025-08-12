import React, { useState, useEffect } from "react";

function IntervalClassCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    function doSomething() {
        console.log(someProp)
    }

    useEffect(() => {
        doSomething()
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [someProp])

    return (<div>{count}</div>)
}

export default IntervalClassCounter