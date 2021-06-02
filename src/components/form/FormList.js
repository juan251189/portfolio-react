import React from 'react'
import ListItem from './ListItem'

function FormList({personalinfo}) {

function removeStudies(){
    console.log("erased");
}

    return (
        <div className="education-list">
               {personalinfo.map((value,index) =>(
               <ListItem
               studies={value}
               removeStudies={removeStudies}
               index={index} 
               key={index}
               />
           ))}
        </div>
    )
}

export default FormList
