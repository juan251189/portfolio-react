import React from 'react'

function ContentExperience({personalinfo}) {


    var filterClicked= personalinfo.skills.filter( item => item.isclicked );

        console.log(filterClicked);
    //    console.log(`hi juan this is what you need ${filterClicked.map(item => item.skill)}`)
    //    let finalArray = filterClicked.map(item => item.skill);
    //      handlerArray('skills',finalArray)


    return (
        <section id="content-experience">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pr-4">
                        <h3><i className="fa fa-star fa-user" ></i>EXPERIENCE&nbsp;</h3>
                        <hr />
                        <ul>

                        
                            <li>
                               <span className="span-right">2015-2016</span>
                               <h4> Support Engineer&nbsp;</h4>
                              
                                <p>VERIDOOH</p>
                            </li>
                         
                             
                        </ul>
                    </div>
                    <div className="col-md-6 about-content " >
                        
                        <div className="row ">
                            <div className="col-12 about-me">
                                <h3><i className="fa fa-star fa-user" ></i>ABOUT ME</h3>
                                <hr/>
                                <p>I am passionate about web development, front end is the perfect way to show my creativity and project ideas through my knowledge’s in web technologies.<br /><br /></p>
                                
                            </div>


                            <div className="col-12">
                            <h3><i className="fa fa-star fa-user" ></i>ABOUT ME</h3>
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
