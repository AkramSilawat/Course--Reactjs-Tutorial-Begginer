import React from 'react'

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

export const NameExportGreet = () => <h1>Hello Vishwas</h1>

// const Greet = props => {
//     console.log(props)
//     // return <h1>Hello props.name</h1>
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.s {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }



// Video No- 12  Destructuring props and state

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hello {name} a.k.s {heroName}
            </h1>
        </div>
    )
}

export default Greet