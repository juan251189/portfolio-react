import React,{useState} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormSkills from './FormSkills'

function UserForm() {

   const [personalinfo,setPersonalinfo] = useState({
       name:"",
       email:"",
       portfolio:"",
       linkedin:"",
       github:"",
       experience:[],
       aboutme:"",
       skills:[],
       education:[],
       organizations:[],
       step:1
    });
  


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
        const name = evt.target.name;
 
        setPersonalinfo({
          ...personalinfo,
          [evt.target.name]: value
        });
      }


      function handlerArray(name,evt){

        if(name === 'skills'){
            setPersonalinfo({...personalinfo,[name]:evt})
        } else{
          const completearray =[...personalinfo[name],evt];
        
        
          console.log(completearray);

        setPersonalinfo({...personalinfo,[name]:completearray})
        }
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
                    handlerArray = {handlerArray}
                    personalinfo={personalinfo}
                    prevStep={prevStep}
                />
            )  
         case 3:
            return(
                <FormSkills 
                
                nextStep={nextStep}
                    handleChanger={handleChanger}
                    handlerArray = {handlerArray}
                    personalinfo={personalinfo}
                    prevStep={prevStep}

                />
            )    
        case 4:
            return(
                <h1>Success</h1>
            )          
    }
}

export default UserForm
