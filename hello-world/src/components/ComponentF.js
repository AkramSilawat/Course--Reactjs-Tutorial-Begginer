// import React, { Component } from "react";
// import { UserConsumer } from "./userContext";

// class ComponentF extends Component {
//     render() {
//         return (
//             <UserConsumer>
//                 {
//                     (username) => {
//                         return <div>Hello {username}</div>
//                     }
//                 }
//             </UserConsumer>
//         )
//     }
// }

// export default ComponentF



// 16 -> userContext Hook Part 2

import React, { Component } from "react";
import { ChannelContext, UserContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div>
                                                User context value {user}, channel context valuse {channel}
                                            </div>
                                        )
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF