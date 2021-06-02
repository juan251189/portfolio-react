import React from 'react'

function Header({personalinfo}) {
    return (
        <section id="header" >
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-sm-12 header-content" ><img className="rounded-circle img-fluid" src="./assets/img/0fca8c9d6a679ffe7359fc3c44691d7b_270x480.jpg"/>
                 <div>  <h1 className="text-dark">{personalinfo.name}</h1>
                    <p className="title-profesion">Front End Software Engineer&nbsp;</p></div> 
                  </div>
                <div className="col-md-5 col-sm-12 contact-info ">

              
                    <h4>PORTFOLIO AND OTHER INFO</h4>
                    <hr />
                    <ul>
                        <li>
                            <div className="form-horizontal row">
                                
                                <div className="col-sm-3 col-2 ">
                                <i className="fa fa-envelope"></i>
                                </div>
                                  
                                <div className="col-sm-9 col-10 group-content text-left">
                                       <h4 className="text-dark">EMAIL</h4>
                                      <p className="">{personalinfo.email}</p>
                                </div> 
                            </div>
           
                        </li>

                        <li>
                            <div className="form-horizontal row">
                                
                                <div className="col-sm-3 col-2 ">
                                <i className="fa fa-envelope"></i>
                                </div>
                                  
                                <div className="col-sm-9 col-10  group-content text-left">
                                       <h4 className="text-dark">Github</h4>
                                      <p className="">{personalinfo.github}</p>
                                </div> 
                            </div>
           
                        </li>

                        

                    </ul>
               
                </div>
            </div>
        </div>
    </section>
    )
}

export default Header
