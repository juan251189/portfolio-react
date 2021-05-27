import React,{useState} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails'

function UserForm() {

   const [personalinfo,setPersonalinfo] = useState({name:"",lastname:"",email:"",step:1});
  


    const {step} = personalinfo;
    const {name,lastname,email} = personalinfo;
 

    const nextStep = () =>{
        const {step} =personalinfo;
            setPersonalinfo( {...personalinfo,step:step+1})
      
    }

   //Go back to prev step 
    const prevStep = () =>{
        const {step} =personalinfo;
            setPersonalinfo({...personalinfo,step:step-1});
      
    }

    //handle fields change 

    function handleChanger(evt) {
        const value = evt.target.value;
        setPersonalinfo({
          ...personalinfo,
          [evt.target.name]: value
        });
      }
    


    switch (step) {
        case 1:
            return(
                <FormUserDetails
                    nextStep={nextStep}
                    handleChanger={handleChanger}
                    personalinfo={personalinfo} />
            )
        case 2:
            return (
                <FormPersonalDetails 
                     nextStep={nextStep}
                    handleChanger={handleChanger}
                    personalinfo={personalinfo}
                    prevStep={prevStep}
                />
            )  
         case 3:
            return(
                <h1>Comfirm</h1>
            )    
        case 4:
            return(
                <h1>Success</h1>
            )          
    }
}

export default UserForm
