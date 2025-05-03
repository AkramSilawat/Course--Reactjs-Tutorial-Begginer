import React from 'react'

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

// export const Greet = () => <h1>Hello Vishwas</h1>

const Greet = props => {
    console.log(props)
    // return <h1>Hello props.name</h1>
    return (
        <div>
            <h1>Hello {props.name} a.k.s {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet