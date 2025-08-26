import React, { useContext } from "react";
import ComponentF from "./ComponentF";

// -> 16 useContext Hook Part -1

// function ComponentE() {
    //     return (
    //         <div>
    //             <ComponentF />
    //         </div>
    //     )

// }



// -> 17 useContext Hook Part -1

// import { UserContext, ChannelContext } from "../../App";

// function ComponentE() {
    // const user = useContext(UserContext)
    // const channel = useContext(ChannelContext)

    // return (
    //     <div>
    //         {user} - {channel}
    //     </div>
    // )

// }


// -> 22 useReducer With useContext
function ComponentE() {

    return (
        <div>
            <ComponentF />
        </div>
    )

}

export default ComponentE