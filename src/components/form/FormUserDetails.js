import React from 'react'

function FormUserDetails({nextStep,handleChanger,personalinfo}) {

const continues = () => {
    nextStep();
}

    return (
        <div className="p-5 " style={{maxWidth:"600px"}}>
     
            <div className="form-group">
             <label htmlFor="email ">Your full name</label>
             <input type="text" 
             onChange={handleChanger}   
             className="form-control"
             value={personalinfo.name}
            
             placeholder="Enter your full name"
             name="name"
             style={{borderBottom:"2px solid grey"}}
             />
            </div>
            <div className="form-group">
             <label htmlFor="email ">Your Email</label>
             <input type="text" 
             onChange={handleChanger}   
             className="form-control" 
             placeholder="Enter Email"
             value = {personalinfo.email} 
             style={{borderBottom:"2px solid grey"}}
             name="email"  
             />
            </div>

            <div className="form-group">
             <label htmlFor="phone">Phone number</label>
             <input 
             type="number"
             onChange={handleChanger}   
             className="form-control" 
             placeholder="Phone number"
             value = {personalinfo.phone} 
             style={{borderBottom:"2px solid grey"}}
             name="phone"  
             />
            </div>

            <div className="form-group">
             <label htmlFor="portfolio">Portfolio link</label>
             <input type="text" 
             onChange={handleChanger}   
             className="form-control" 
             placeholder="Enter Email"
             value = {personalinfo.potfolio} 
             style={{borderBottom:"2px solid grey"}}
             name="portfolio"  
             />
            </div>

            

            <div className="form-group">
             <label htmlFor="github">github</label>
             <input 
             type="text"
             onChange={handleChanger}   
             className="form-control" 
             placeholder="Github link"
             value = {personalinfo.github} 
             style={{borderBottom:"2px solid grey"}}
             name="github"  
             />
            </div>


            <div className="form-group">
             <label htmlFor="linkedin">linkedIn</label>
             <input 
             type="text"
             onChange={handleChanger}   
             className="form-control" 
             placeholder="LinkedIn link"
             value = {personalinfo.linkedin} 
             style={{borderBottom:"2px solid grey"}}
             name="linkedin"  
             />
            </div>


            <button type="button" className="btn btn-primary"
            onClick={continues}
            >Next</button>

            

   
        </div>
    )
}

export default FormUserDetails
