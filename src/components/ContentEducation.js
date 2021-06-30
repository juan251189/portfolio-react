
import React from 'react'

function ContentEducation({personalinfo,handleChanger}) {
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
                            <h4>{item.course}</h4>
                            {console.log(`Hi juan`+item)}
                            <p>
                              {item.university} - {item.degree}
                            </p>
                           
                    </li>
                    ))}
                     
                 
                </ul>
                   
                </div>
              
            
          <div className="col-md-6 heading-text">
                                <h4><i className="fa fa-star fa-user" ></i>Header</h4>
                                <hr/>
                                <div>
                                <div className="fa fa-pencil fa-lg edit-content"
                                ></div>
                               
                            <textarea style={{backgroundColor:'#ffffff',border:'none'}}
                                name="heading"
        value={personalinfo.heading}
          onChange={(evt)=>handleChanger(evt)}
          rows={5}
          cols={50}
        />
        
                                <br /><br />
                               
                                </div>
                                
                            </div> 
            </div>
        </div>
    </section>
    )
}

export default ContentEducation
