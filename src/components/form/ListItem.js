import React from 'react'

function ListItem({arrayList,removeStudies,index,deleteEducation,data}) {

  


    return (
        
        <div>
         {data ==='education' ? 
         <div className="education-item">
         <button className="remove-item" onClick={()=>deleteEducation(index,'education')}>x</button>
          <div className="item-uni">{arrayList.university}</div>
          <div className="item-degree">{arrayList.degree}</div> 
         <div className="item-date">{arrayList.graduationDate}</div> 
         </div>
         : 
         <div className="education-item">
         <button className="remove-item" onClick={()=>deleteEducation(index,'experience')}>x</button>
          <div className="item-uni">{arrayList.role}</div>
          <div className="item-degree">{arrayList.company}</div> 
         <div className="item-date">{arrayList.startDate}</div> 
         <div className="item-date">{arrayList.endDate}</div> 

         </div>
         }
        </div>

        // <div className="education-item">
        // <button className="remove-item" onClick={()=>deleteEducation(index)}>x</button>
        //     <div className="item-uni">{arrayList.university}</div>
        //     <div className="item-degree">{arrayList.degree}</div> 
        //     <div className="item-date">{arrayList.graduationDate}+{data}</div> 
        // </div>
    )
}

export default ListItem
