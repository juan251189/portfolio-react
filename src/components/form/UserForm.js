import React,{useState} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormSkills from './FormSkills'
import ContentExperience from '../ContentExperience';
import Header from '../Header';
import Hobbies from '../Hobbies';
import ContentEducation from '../ContentEducation';

function UserForm() {

   const [personalinfo,setPersonalinfo] = useState({
       name:"",
       email:"",
       phone:"",
       portfolio:"",
       linkedin:"",
       github:"",
       experience:[],
       aboutme:"",
       skills:[
        {skill:"html",isclicked:false},
        {skill:"css",isclicked:false},
        {skill:"Javascript",isclicked:false},
        {skill:"React",isclicked:false},
        {skill:"Vue.js",isclicked:false},
        {skill:"Node.js",isclicked:false},
        {skill:"Ruby on Rails",isclicked:false},
        {skill:"SQL",isclicked:false},
        {skill:"AWS",isclicked:false},
        {skill:"PHP",isclicked:false}
       ],
       education:[],
       organizations:[],
       profilePicture:'',
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


      function deleteEducation (i){
          let educationArray = [...personalinfo.education];
          let newArray=educationArray[i];
          let filteredArray = educationArray.filter(item =>item!==newArray)
        //  let finalArray = educationArray.filter.filteredlArray(educationArray,i);
        console.log(filteredArray);
        setPersonalinfo({...personalinfo,'education':filteredArray})
          
      }

      const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          let img = event.target.files[0];
          setPersonalinfo({...personalinfo, 'profilePicture': URL.createObjectURL(img)});
        }
      };

    


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
                    deleteEducation={deleteEducation}
                />
       
            
            )  
         case 3:
            return(
                <FormSkills 
                
                nextStep={nextStep}
                    handleChanger={handleChanger}
                    handlerArray = {handlerArray}
                    personalinfo={personalinfo}
                    setPersonalinfo = {setPersonalinfo}
                    prevStep={prevStep}

                />
            )    
        case 4:
            return(
                <div className="cv-template container-fluid ">
                        
                     <Header personalinfo={personalinfo} onImageChange={onImageChange} />

<ContentExperience personalinfo = {personalinfo} />

<ContentEducation personalinfo={personalinfo}/>
<Hobbies />
                </div>
               
            )          
    }
}

export default UserForm