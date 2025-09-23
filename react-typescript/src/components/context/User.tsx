import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)
    console.log('userContext', userContext) // {user: null, setUser: f}
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Vishwas',
                email: 'vishwas@example.com',
            })
        }
    }

    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}