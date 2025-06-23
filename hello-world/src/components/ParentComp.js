import React, {Component, } from "react";
import { RegComp } from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: 'Akram'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Akram'
            })
        }, 2000)
    }
    render(){
        console.log('*********************Preant Comp Render******************************')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>

            // --> 27 Memo
            // <div>
            //     Parent Component
            // <MemoComp name={this.state.name} />
            // </div>
            
        )
    }
}

export default ParentComp