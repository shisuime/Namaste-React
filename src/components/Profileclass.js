import React from "react";
import ChildOne from "./ChildOne";

class Profileclass extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor parent")
        this.state={
            firststate: "child 1",
            secondstate:"child 2"
        }
    }
    componentDidMount(){
        console.log("componentdidmount parent")
        setInterval(()=>{
            console.log("parent")
        },1000)
    }
    componentWillUnmount(){
        console.log("parent componentwillunmount")
        clearInterval()
    }
    render() {
        console.log("render parent")
        return(
            <div>
                <h1>hi from parent profile class</h1>
                {/* <h1>name:{this.props.name}</h1> */}
                <ChildOne name1={this.state.firststate}/>
                <ChildOne  name2={this.state.secondstate}/>
            </div>
        )
    }
}

export default Profileclass;