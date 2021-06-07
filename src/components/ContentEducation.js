
import React from 'react'

function ContentEducation({personalinfo}) {
    const {university,degree,graduationDate} = personalinfo.education; 
    return (
        <section id="content-education" >
        <div className="container">
            
            <div className="row">
                <div className="col-md-6 education-uni pr-5">
                    <h4><i className="fa fa-graduation-cap" ></i>EDUCATION</h4>
                    <hr  />

                    <ul>
                    {personalinfo.education.map((item,index) =>(
                        <li key={index}>
                            <span className="span-right">{item.graduationDate}</span>
                            <h4>{item.university}</h4>
                            {console.log(`Hi juan`+item)}
                            <p>
                              {item.degree}
                            </p>
                    </li>
                    ))}
                     
                 
                </ul>
                   
                </div>
                <div className="col-md-6  social">
                    <h4><i className="fa fa-star fa-user" ></i>HEADING</h4>
                    <hr  />
                    <p className="p-3">I am passionate about web development, front end is the perfect way to show my creativity and project ideas through my knowledge’s in web technologies.<br /><br /></p>
                    <p><br /></p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContentEducation
