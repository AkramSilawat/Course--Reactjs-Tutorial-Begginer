import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Akram')

    console.log('ParentTwo Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Codevolution')}>Change Name</button>

            <MemoizedChildTwo name={name} />
            <ul>
                <li>Parent 1</li>
                <li>Parent zxcvasdf 2</li>
                <li>Parent asdf dd 3</li>
                <li>Parent  asdf d 4</li>
                <li>Parent 5</li>
                <li>Parent 6</li>
            </ul>
        </div>
    )
}
