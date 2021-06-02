import React,{useState} from 'react'


/*
 This component has a local state which means everytime the switch case points a different component , the state will reset.
to avoid this i could either use the state from parent component adding the is clicked property also and call it from the child component 
 1.2 or i can use useEffect to compare the local state is with the parent component and update it if property from parent component exist (the ones we added already) */
function FormSkills({prevStep,nextStep,handlerArray,personalinfo,setPersonalinfo}) {
    // const [skills,setSkills] = useState([
    //     {skill:"html",isclicked:false},
    //     {skill:"css",isclicked:false},
    //     {skill:"Javascript",isclicked:false},
    //     {skill:"React",isclicked:false},
    //     {skill:"Vue.js",isclicked:false},
    //     {skill:"Node.js",isclicked:false},
    //     {skill:"Ruby on Rails",isclicked:false},
    //     {skill:"SQL",isclicked:false},
    //     {skill:"AWS",isclicked:false},
    //     {skill:"PHP",isclicked:false}
    // ])

   function clickHandler(val,i){
       //set state with selecte skills
    //    console.log(personalinfo.skills[i]);
    //    let newArray = [...personalinfo.skills];
    //    newArray[i] = {...newArray[i], isclicked:!newArray[i].isclicked}
    //  setPersonalinfo((pe));

    let newstate= {...personalinfo};
    let newstate2 = newstate.skills;
      newstate2[i]={...newstate2[i],isclicked:!newstate2[i].isclicked}
      console.log(newstate2)
      setPersonalinfo({...personalinfo,"skills":newstate2})
   }

   //This function is not longer needed since the state is now placed on the parent component 
  //  function addSkill(){
  //    var filterClicked= personalinfo.skills.filter( item => item.isclicked )

  //     console.log(filterClicked);
  //    console.log(`hi juan this is what you need ${filterClicked.map(item => item.skill)}`)
  //    let finalArray = filterClicked.map(item => item.skill);
  //      handlerArray('skills',finalArray)
  //  }
    
    return (
        <div className="">
         <div className="jumbotron">Now select your skills</div>

         <div className="skills-content">
            <div className="row ">

                           
            {personalinfo.skills.map((value,index) =>(

             
<div className={personalinfo.skills[index].isclicked === true ? 'card-skills clicked ' : 'card-skills'}
onClick={() =>clickHandler(value.skill,index)} 
key={index}

>{value.skill}</div> 

))}

            </div>

</div>
<div className="d-flex justify-content-around ">
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

export default FormSkills
