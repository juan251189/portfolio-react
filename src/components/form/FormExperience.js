import React,{useState} from 'react';
import FormList from '../form/FormList';
function FormExperience ({nextStep,handleChanger,handlerArray,personalinfo,prevStep,deleteEducation}){
    const [experience, setExperience]=useState(
        {
            company:"",
            role:" ",
            startDate:'',
            endDate:''

        }
    );

        
    const handler = (evt) => {
        
        setExperience({
            ...experience,
            [evt.target.name]:evt.target.value
        })
    };

    const addExperience =() => {
        handlerArray('experience',experience);
        console.log(experience);
        setExperience({
            company:"",
            role:" ",
            startDate:'',
            endDate:''

        })
    }

    

    return (
        <div className="form-personal-details container">
            <div className="jumbotron"><h2>Experience</h2></div>

            <div className="row form-inner mb-4">
                <div className="col-md-6 col-sm-12 mb-4">
                
                <input type="text" name="company" placeholder=" Company..."
                value={experience.company}
                style={{'width':'100%','padding':0,'margin':0}}
               
                    onChange={handler}
                />
               
                </div>

               
                <div className="col-md-6 col-sm-12 mb-4">
                
                <input type="text" name="role" placeholder=" Role..."
                value={experience.role}
                style={{'width':'100%','padding':0,'margin':0}}
                    onChange={handler}
                />
               
                </div>

                <div className="col-md-6 col-sm-6 mb-4">
                
                <input type="date" name="startDate" placeholder="date"
                value={experience.startDate}
                style={{'width':'100%','padding':0,'margin':0}}
                    onChange={handler}
                />
               
                </div>

                <div className="col-md-6 col-sm-6 mb-4">
                
                <input type="date" name="endDate" placeholder="date"
                value={experience.endDate}
                style={{'width':'100%','padding':0,'margin':0}}
                    onChange={handler}
                />
               
                </div>



                <input 
                type="submit"
                onClick={addExperience} value="Add Experience" />
                   

              
            </div>
            

            <FormList personalinfo={personalinfo.experience}
                deleteEducation={deleteEducation}
                data="experience"
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


export default FormExperience




