import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Akram</div>

        // return this.state.isLoggedIn ?(
        //     <div>Welcome Akram</div>
        //     ) : (
        //     <div>Welcome Guest</div>
            
        // )



        // let message
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Akram</div>
        // } else {
        //     <div>Welcome Akram</div>
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
