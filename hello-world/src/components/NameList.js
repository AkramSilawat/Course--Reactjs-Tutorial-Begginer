import React, { Component } from 'react'
import Person from "./Person";

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //         <h2>{names[1]}</h2>
    //         <h2>{names[2]}</h2> */}

    //     </div>
    // )

    // return <div>{nameList}</div>


    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            sgill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    // const personList = persons.map(person => <Person person={person} />)


    // -> 18 Lists and Keys
    const personList = persons.map(person => <Person key={person.name} person={person} />)
    // return <div>{personList}</div>



    // -> 19 Index as key anti-pattern

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

    const nameList = names.map((name, index)=> <h2 key ={index}>{index +1} {name}</h2>)
    return <div>{nameList}</div>
}
export default NameList
