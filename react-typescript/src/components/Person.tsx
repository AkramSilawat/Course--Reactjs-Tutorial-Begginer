type personName = {
    name: {
        first: string
        last: string
    }
}

export const Person = (props: personName) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}


// -------> 08 - Props Types And Tips <------

// import { personProps } from "./Person.types"

// export const Person = (props: personProps) => {
//     return (
//         <div>
//             {props.name.first} {props.name.last}
//         </div>
//     )
// }