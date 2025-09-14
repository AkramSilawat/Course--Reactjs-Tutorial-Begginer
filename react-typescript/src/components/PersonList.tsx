type PersonListProps = {
    name: {
        first: string
        last: string
    }[]
}


export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.name.map(name => {
                return (
                    <h2 key={name.first}>
                        {name.first} {name.last}
                    </h2>
                )
            })}

            {/* <h2>Bruce Wayne</h2>
            <h2>Clark Kent</h2>
            <h2>Princess Diana</h2> */}
        </div>
    )
}