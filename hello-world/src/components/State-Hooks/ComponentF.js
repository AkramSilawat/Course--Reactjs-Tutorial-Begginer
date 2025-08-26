// import React from "react";
// import { UserContext, ChannelContext } from "../../App";


// -> 16  useContext Hook Part - 1,2

// function ComponentF(){
//     return (
//          <div>
//             <UserContext.Consumer>
//                 {
//                     user => {
//                         return (
//                             <ChannelContext.Consumer>
//                                 {
//                                     channel => {
//                                         return (
//                                             <div>
//                                                 User context value {user}, channel context valuse {channel}
//                                             </div>
//                                         )
//                                     }
//                                 }
//                             </ChannelContext.Consumer>
//                         )
//                     }
//                 }
//             </UserContext.Consumer>
//         </div>
//     )
// }

// export default ComponentF




// -> 22 useReducer With useContext

import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrememt</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>

        </div>
    )
}

export default ComponentF