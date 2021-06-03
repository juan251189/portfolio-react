import React,{useState} from 'react'
import FormList from './FormList';

function FormPersonalDetails({nextStep,handleChanger,handlerArray,personalinfo,prevStep}) {
   const [education,setEducation] = useState({
       university:'',
       degree:'diploma',
       year:''
   })
   
   function handler (e){
      setEducation(
       {...education,
           [e.target.name]:e.target.value
        }) 
       
   }

   function addEducation(){
    handlerArray("education",education);
    setEducation({   university:'',
       degree:'diploma',
       year:''});
       
   }


const continues = () => {
    
    nextStep();
}

const back =() => {
    prevStep();
}

    return (
        <div className="form-personal-details container">
            <div className="jumbotron">FormPersonalDetails</div>
            <div>
                <input type="text" name="university" value={education.university}
                    onChange={handler}
                />
                <select name="degree" defaultValue={education.degree} onChange={handler} >
                    <option value="diploma">Diploma</option>
                    <option value="advancediploma">Advance diploma</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="phd">PHD</option>
                </select>
                <button 
                className="btn btn-info"
                onClick={addEducation} >Add Skill</button>

            </div>

            <FormList personalinfo={personalinfo.education}/>
            

            <div className="d-flex justify-content-around">
            <button type="button" className="btn btn-secondary"
            onClick={prevStep}
            >back</button>
                 <button type="button" className="btn btn-primary"
            onClick={nextStep}
            >Next</button>
            </div>
        
         
         

            

   
        </div>
    )
}

export default FormPersonalDetails
