import React from "react";

const Hello = () => {
    // without  using jsx

    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Akram</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        { id: 'hello', className: 'dummyClass' },
        React.createElement('h1', null, 'Hello Akram')
    )
}

export default Hello