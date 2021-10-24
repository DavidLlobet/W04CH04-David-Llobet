import { getByPlaceholderText } from "@testing-library/react";
import { useContext } from "react";
import { useState } from "react";
import Context from "../../context/Context";

const PersonalData = ({ formName }) => {
  const { goForward } = useContext(Context);
    
  return (
    
    <section className
   ="personal-data">
      <h2>{formName}</h2>
      <form className
      ="row g-3 needs-validation" novalidate>
      <div class="form-group">
    <label for="exampleInputEmail1">First name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required/>
   
  </div>
      
       <div class="form-group">
    <label for="exampleInputEmail1">Last name</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder=""  required/>
   
  </div>
        
            <div className
            ="row-md-4">
          <label for="validationCustomUsername" className
          ="form-label"
            >Birthday</label
          >
          <div className
          ="input-group has-validation">
            
            <input
              type="text"
              className
              ="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend" placeholder=""
              required
            />
            
          </div>
          <div>Age</div>
        </div>
 
      </form>
       <footer class="grid column">
  
    <button onClick={goForward}>Next</button>

  </footer>
    </section>
    
  );
};

export default PersonalData;