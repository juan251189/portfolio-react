import React from 'react'

function FormPersonalDetails({nextStep,handleChanger,personalinfo,prevStep}) {

const continues = () => {
    
    nextStep();
}

const back =() => {
    prevStep();
}

    return (
        <div className="p-5">
            <div className="jumbotron">FormPersonalDetails</div>
            <div className="form-group">
             <label htmlFor="email ">Your full name</label>
             <input type="text" 
             onChange={handleChanger}   
             className="form-control"
             value={personalinfo.name}
            
             placeholder="Enter your name"
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
            <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-secondary"
            onClick={back}
            >Back</button>
            <button type="button" className="btn btn-primary"
            onClick={continues}
            >Next</button>
            </div>
         
         

            

   
        </div>
    )
}

export default FormPersonalDetails
