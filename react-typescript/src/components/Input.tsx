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
    placeholder: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, handleChange, placeholder }: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange} style={{
            display: "block",
            margin: "0 auto 20px",
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "10px 15px"
        }} />
}