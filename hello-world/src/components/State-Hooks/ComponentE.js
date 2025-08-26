import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, ChannelContext } from "../../App";


function ComponentE() {

    // -> 16 useContext Hook Part -1

    //     return (
    //         <div>
    //             <ComponentF />
    //         </div>
    //     )


    // -> 17 useContext Hook Part -1

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE