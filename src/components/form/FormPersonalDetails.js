import React,{useState} from 'react'
import FormList from './FormList';

function FormPersonalDetails({nextStep,handleChanger,handlerArray,personalinfo,prevStep,deleteEducation}) {
   const [education,setEducation] = useState({
       university:'',
       degree:'diploma',
       graduationDate:'',
       course:''
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
       graduationDate:'',
        course:''
    });
       
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

            <div className="row form-inner mb-4">
                <div className="col-md-6 col-sm-12 mb-4">
                
                <input type="text" name="university" placeholder="University..."
                value={education.university}
                style={{'width':'100%','padding':0,'margin':0}}
               
                    onChange={handler}
                />
               
                </div>

                <div className="col-md-6 col-sm-12">
               
            

               <div className="input-group mb-3">
 <div className="input-group-prepend">
   <label className="input-group-text" htmlFor="inputGroupDegree">Degree</label>
 </div>
 <select className="custom-select" id="inputGroupDegree"
    name="degree" defaultValue={education.degree} onChange={handler}>
 <option value="diploma">Diploma</option>
                   <option value="advancediploma">Advance diploma</option>
                   <option value="bachelor">Bachelor</option>
                   <option value="master">Master</option>
                   <option value="phd">PHD</option>
 </select>

               </div>
               </div>
                <div className="col-md-6 col-sm-12 mb-4">
                
                <input type="text" name="course" placeholder=" Course..."
                value={education.course}
                style={{'width':'100%','padding':0,'margin':0}}
                    onChange={handler}
                />
               
                </div>

                <div className="col-md-6 col-sm-12 mb-4">
                
                <input type="date" name="graduationDate" placeholder="date"
                value={education.graduationDate}
                style={{'width':'100%','padding':0,'margin':0}}
                    onChange={handler}
                />
               
                </div>
                <input 
                type="submit"
                onClick={addEducation} value="Add Skill" />
                   

              
            </div>
            

            <FormList personalinfo={personalinfo.education}
                deleteEducation={deleteEducation}
            />
            

            <div className="d-flex justify-content-around pt-4">
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
