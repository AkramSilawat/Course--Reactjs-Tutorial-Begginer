// import React, { Component } from "react";
// import ComponentF from "./ComponentF";
// import UserContext, { UserConsumer } from "./userContext";

// class ComponentE extends Component {
//     static contextType = UserContext
//     render() {
//         return (
//             <div>
//                 Component E context {this.context}
//                 <ComponentF />
//             </div>
//         )
//     }
// }

// ComponentE.contextType = UserContext

// export default ComponentE



// 17 ----> useContext Hook Part 3 <----

import React, {useContext} from "react";
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from "../App";

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
