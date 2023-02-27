import React,{Component} from 'react'

export default class ErrorBoundry extends Component{

    constructor(props){
        super(props)

        this.state={
            hasError: false
        }

    }

    //If anything errors out, this lifecycle hook is run
    componentDidCatch(error,info){

        this.setState({hasError:true})

    }



    render(){

        if(this.state.hasError){

            return <h1>Oops! Something went wrong with the component</h1>
        }

        return ( this.props.children)

    }
  
}
