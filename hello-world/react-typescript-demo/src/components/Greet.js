// type GreetProps = {
//     name: string
//     messageCount: number
//     isLoggedIn: boolean
// }

export const Greet = (props) => {
    return (
        <div>
            <h2>
                {props.isLoggedIn
                ? `Welcome ${props.name}! You have ${props.messageCount} unread messages` 
                : 'Welcom Guest'}
            </h2>
        </div>
    )
}
