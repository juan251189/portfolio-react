
import './App.css';
import React,{useState,useRef} from 'react'

import UserForm from './components/form/UserForm'

function App() {
    const [step, setStep]=useState(0);
    


  return (
    <div className="App border" >
    
      
    <UserForm />
     {/* <div className="container main-content">
        
        {info.length ?
        <div>
         <Header info={info} />
         <ContentExperience />
         </div>
          : ( 
        <form 
        onSubmit={addInfo}
        className="p-5">
            <div className="form-group">
             <label htmlFor="email ">Your full name</label>
             <input type="text" 
             onChange={infoHandle}
             className="form-control" 
             placeholder="Enter your name"
             name="Name"
             style={{borderBottom:"2px solid grey"}}
             />
            </div>
            <div className="form-group">
             <label htmlFor="email ">Your Email</label>
             <input type="text" 
             onChange={infoHandle}
             className="form-control" 
             placeholder="Enter Email" 
             style={{borderBottom:"2px solid grey"}}
             name="email"  
             />
            </div>

            

              <div style={{display:"flex",justifyContent:'flex-start',alignItems:'flex-start',flexDirection:"column",padding:"18px"}}>
              <label className="checkbox-inline"><input type="checkbox" value="html" />html</label>
              <label className="checkbox-inline"><input type="checkbox" value="javascript"/>Javascript</label>
              <label className="checkbox-inline"><input type="checkbox" value="css" />css</label>
              <label><input type="checkbox" value="React.js"/>React</label>
              <label className="checkbox-inline"><input type="checkbox" value="Vue.js"/>Vue Js</label>
<label className="checkbox-inline"><input type="checkbox" value="Node.js"/>Node.js</label>
<label className="checkbox-inline"><input type="checkbox" value="SQL"/>SQL</label>
<label className="checkbox-inline"><input type="checkbox" value="php"/>PHP</label>
            </div>




            <input type="text" placeholder="Type your full name" ref={name}/>

            <input type="email" placeholder="Type your Email" ref={email}/>
            <input type="text" placeholder="Github Link" ref={github}/>
      
           <input type="submit" value="Submit" className="btn btn-success"/>

        </form>)}



        
        


        
      
     </div> */}
     
    </div>
  );
}

export default App;
