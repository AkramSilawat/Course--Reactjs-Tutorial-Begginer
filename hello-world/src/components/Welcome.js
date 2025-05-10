import React, { Component } from 'react'

// class Welcome extends Component {
//     render() {
//         // return <h1>Class Component</h1>
//         return <h1>Welcome {this.props.name} a.k.s {this.props.heroName}</h1>
//     }
// }


// Video No- 12  Destructuring props and state

class Welcome extends Component {
    render() {
        const { name, heroName } = this.props
        const {state1, state2} = this.state
        return (
            <h1>
                Welcome {name} a.k.s {heroName}
            </h1>
        )
    }
}

export default Welcome