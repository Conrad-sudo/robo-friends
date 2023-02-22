import React,{Component} from 'react'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from "../components/SearchBox"
import "./App.css"




export default class App extends Component {

    /*stae usually lives in the parent component
     It sets the initial state of the app with an empty array*/
    constructor(){

        super()
        this.state={

            robots: [],
            searchfield:""
        }


    }

    /* after the app component mounted to index.js this function runs and changes the state*/
    componentDidMount(){

        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
            return response.json()
            }).then(users=> this.setState({robots:users}))

        
    }

    //update the state of the serchfield to whatever is written in the input
    onSearchChange=(event)=>{

        //in order to update state we must use this.setState()
        this.setState({searchfield:event.target.value})


        
    }
    

    render(){

        //its says put "this.state" infront of robots and searchfield
        const {robots,searchfield}=this.state

        const filteredRobots=robots.filter(robot=>{

            //return the value if the name of the robot in lower case includes the searchfield text in lower case
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })


        if (robots.length===0){
            return <h1>Loading</h1>
        }

        else{


            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
            
                </div>
              )


        }
     


        

    }

   

 
}


/*

 return !robots.length ? <h1>Loading</h1>:
        

            (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />

                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
            
                </div>
              )
*/