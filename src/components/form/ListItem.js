import React from 'react'

function ListItem({studies,removeStudies,index}) {
    return (
        <div className="income-item">
        <button className="remove-item" onClick={()=>removeStudies(index)}>x</button>
            <div className="desc">{studies.university}</div>
            <div className="price">{studies.degree}</div> 
            <div className="date"></div> 
        </div>
    )
}

export default ListItem
