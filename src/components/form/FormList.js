import React from 'react'
import ListItem from './ListItem'

function FormList({personalinfo,deleteEducation,data}) {

  

    return (
        <div className="education-list">
               {personalinfo.map((value,index) =>(
               
               <ListItem
               arrayList={value}
             
               index={index} 
               key={index}
               deleteEducation={deleteEducation}
               data={data}
               />
           ))}
        </div>
    )
}

export default FormList
