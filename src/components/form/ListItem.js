import React from 'react'

function ListItem({studies,removeStudies,index,deleteEducation}) {

  


    return (
        <div className="education-item">
        <button className="remove-item" onClick={()=>deleteEducation(index)}>x</button>
            <div className="item-uni">{studies.university}</div>
            <div className="item-degree">{studies.degree}</div> 
            <div className="item-date">{studies.graduationDate}</div> 
        </div>
    )
}

export default ListItem