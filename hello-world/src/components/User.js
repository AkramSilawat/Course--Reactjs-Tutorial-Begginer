import React, { Component } from "react";

class User extends Component {
    render() {
        return (
            <div>
                {this.props.rendar(false)}
            </div>
        )
    }
}

export default User