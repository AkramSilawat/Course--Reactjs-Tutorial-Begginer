import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false 
        }
     
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Akram</div>

        // -> ternary operator

        // return this.state.isLoggedIn ?(
        //     <div>Welcome Akram</div>
        //     ) : (
        //     <div>Welcome Guest</div>
            
        // )



        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Akram</div>
        // } else {
        //    message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>




        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Akram</div>
        // } else {
        //     return <div> Welcome Guest</div>

        // }

        // return (
        //     <div>
        //         <div>Welcome Akram</div>
        //         <div>Welcome Guest</div>

        //     </div>
        // )
    }
}

export default UserGreeting
