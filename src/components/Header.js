import React from 'react'

function Header({personalinfo,onImageChange}) {
    return (
        <section id="header" >
        <div className="container">
            <div className="row ">

                    <div className="col-12 col-sm-6 col-md-3">
                    <div>
                {/* trying to render conditionally if image exists  */}
                { !personalinfo.profilePicture ? (<input type="file" name="profilePicture" onChange={onImageChange} />):
               (<img src={personalinfo.profilePicture} className="rounded-circle "/>)
                }
            
             </div>
                    </div>



                <div className="col-12 col-sm-6 col-lg-4 header-content" >
              
             
                 <div>  <h1 className="text-dark">{personalinfo.name}</h1>
                    <p className="title-profesion">Front End Software Engineer&nbsp;</p></div> 
                  </div>


                <div className="col-12 col-sm-6 col-lg-5 contact-info ">

              
                    <h4>PORTFOLIO AND OTHER INFO</h4>
                    <hr />
                    <ul>
                      
                            
                                
                               
                                  
                                 {personalinfo.email ? ( 
                                    <li>
                                    <div className="form-horizontal row">
                                    <div className="col-sm-3 col-2 ">
                                <i className="fa fa-envelope"></i>
                                </div>
                                      <div className="col-sm-9 col-10 group-content text-left">
                                       <h4 className="text-dark">EMAIL</h4>
                                      <p className="">{personalinfo.email}</p>
                                </div> </div>  </li>) : ''} 
                              

                              {personalinfo.github ? (
                                <li>
                            <div className="form-horizontal row">
                                
                                <div className="col-sm-3 col-2 ">
                                <i className="fa fa-envelope"></i>
                                </div>
                                  
                                <div className="col-sm-9 col-10  group-content text-left">
                                       <h4 className="text-dark ">Github</h4>
                                      <p className="">{personalinfo.github}</p>
                                </div> 
                            </div>
           
                        </li>
                              ): ''}
                          
           
                      

                   

                        

                    </ul>
               
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header
