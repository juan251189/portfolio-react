import React from 'react'

function ContentExperience({personalinfo,handleChanger}) {





    var filterClicked= personalinfo.skills.filter( item => item.isclicked );

      
    //    console.log(`hi juan this is what you need ${filterClicked.map(item => item.skill)}`)
    //    let finalArray = filterClicked.map(item => item.skill);
    //      handlerArray('skills',finalArray)

//investigate why is not showing up data from personal info 




    return (
        <section id="content-experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 education-uni pr-5">
                        <h3><i className="fa fa-star fa-user" ></i>EXPERIENCE&nbsp;</h3>
                        <hr />
                        <ul style={{listStyle:'none'}}>

                        {personalinfo.experience.map((item,index) => (
                            <li key={index}>
                               <span className="span-right">{item.startDate}  -  {item.endDate}</span>
                               <h4> {item.role} </h4>
                              
                                <p>{item.company}</p>
                            </li>
                        ))}
                         
                         
                             
                        </ul>
                    </div>
                    <div className="col-md-6 about-content " >
                        
                        <div className="row about_me">
                            <div className="col-12 about-me">
                                <h3><i className="fa fa-star fa-user" ></i>ABOUT ME</h3>
                                <hr/>
                                <div>
                                <div className="fa fa-pencil fa-lg edit-content"
                                ></div>
                               
                                <textarea style={{backgroundColor:'#f5f4f2',border:'none'}}
                                name="aboutme"
        value={personalinfo.aboutme}
          onChange={(evt)=>handleChanger(evt)}
          rows={5}
          cols={50}
        />
        
                                <br /><br />
                               
                                </div>
                                
                            </div>


                            <div className="col-12">
                            <h3><i className="fa fa-star fa-user" ></i>SKILLS</h3>
                                <hr/>

                                <div className="row">
                                    <hr />
                                    
                                        {filterClicked.map((item,index)=>(

                                            <div className="col-md-3 col-6   mb-5" key={index}>
                                             <div className="card">{item.skill}</div> 
                                          </div>
                                        ))}


                                    
                                   
                                    
                                </div>
                                </div>
                        </div>
                        
                   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentExperience
