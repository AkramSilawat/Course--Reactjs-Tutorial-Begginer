import React, { useState } from "react";

const initState = ['Bruce', 'Wayne', 'Arman']

export const ArrayUseState = () => {

    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render')

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {persons.map(person => (
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'space-between',
                    width: "200px",
                    margin: "0 auto 20px",
                    background: '#f3f3f3',
                    padding: "10px",
                    borderRadius: 10
                }}
                >
                    <div key={person}>{person}</div>
                    <button onClick={() => {
                        console.log(person)
                        const result = persons.filter(item => item !== person)
                        console.log('result', result)
                        setPersons(result)
                    }}>delete</button>
                </div>
            ))
            }
        </div>
    )
}
