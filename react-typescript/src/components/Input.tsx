// import React from "react";

// type InputProps = {
//     value: string
//     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
// }

// export const Input =(props: InputProps) => {
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         console.log(event)
//     }
//     return <input type="text" value={props.value} onChange={handleInputChange} />
// }


// ----> Props Types And Tips <-------

import React from "react";

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input =({value, handleChange}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="text" value={value} onChange={handleChange} />
}