// import { useState } from "react"

// type AuthUser = {
//     name: string
//     email: string
// }

// export const LoggedIn = () => {

//     const [user, setUser] = useState<AuthUser | null>(null)
    
//     const handleLogin = () => {
//         setUser({
//             name: 'Vishwas',
//             email: 'vishwas@exmpal.com'
//         })
//     }

//     const handleLogout = () => {
//         setUser(null)
//     }

//  return (
//         <div>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleLogout}>Logout</button>
//             <div>User name is {user?.name}</div>
//             <div>User email is {user?.email}</div>
//            </div>
//     )
// }



// ----> 11 - useState Type Assertion <-----


import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const LoggedIn = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    
    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@exmpal.com'
        })
    }

 return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
           </div>
    )
}