import React from 'react'
import ListItem from './ListItem'

function FormList({personalinfo,deleteEducation}) {

    //please update the delete function . it is not in functionality
function removeStudies(){
//   let temporalArray = [...personalinfo];
//   const removedValue = temporalArray.filter(ind => temporalArray[ind]);
//   console.log(removedValue);
}
    return (
        <div className="education-list">
               {personalinfo.map((value,index) =>(
               <ListItem
               studies={value}
               removeStudies={removeStudies}
               index={index} 
               key={index}
               deleteEducation={deleteEducation}
               />
           ))}
        </div>
    )
}

export default FormList
