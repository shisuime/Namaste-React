import React from "react";

class ChildOne extends React.Component{
    constructor(props){
        console.log("constructor child one")
        super(props)
    }
    componentDidMount(){
        console.log("childone component did mount")
        setInterval(()=>{
            console.log("childone")
        },1000)
    }
    componentWillUnmount(){
        console.log("childone componentwillunmount")
        clearInterval()
    }
    render(){
        console.log("render childone")
        return(
            <>
            <h1>{ this.props.name1}</h1>
            <h1>{this.props.name2}</h1>
            </>
            
        )
    }
}

export default ChildOne