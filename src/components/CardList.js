import React from 'react'
import Card from "./Card"



export default function CardList({robots}) {

    //creates an array of card components of all robot elements from the robots.js
    
   

  return (

    <div>

        {
            robots.map((user,i)=>{
                return(
                     <Card 
                        key={i} 
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                       
                    />
                )
            })
        }
    
    </div>
     
  )
}
