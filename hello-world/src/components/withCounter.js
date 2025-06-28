import React from "react";

const UpdateComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name= 'vishwas' />
        }
    }
    return NewComponent
}


export default UpdateComponent