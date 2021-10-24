import { useContext } from "react";
import Context from "../../context/Context";

const PersonalData = ({ formName }) => {
  const { goForward } = useContext(Context);
    
  return (
    
    <section className
   ="personal-data row m-3">
      <h2>{formName}</h2>
      <form className
      ="row m-3 needs-validation" noValidate>
      <div className="col-4">
    <label htmlFor="exampleInputEmail1">First name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" required/>
   
  </div>
      
       <div className="col-4">
    <label htmlFor="exampleInputEmail1">Last name</label>
    <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder=""  required/>
   
  </div>
        
          <div className="col-8">
            <label htmlFor="birthdate">Birthday:</label>
            <div className="container row p-0">
              <div className="col-4">
                <input
                  className="form-control"
                  id="birthdate"
                  type="date"
                  name="birthdate"
                  required
                  autoComplete="off"
                />
              </div>
                       <div className="col-6">Age: </div>

            
          </div>
        </div> 

      </form>
       <footer className="grid column">
  
    <button onClick={goForward}>Next</button>

  </footer>
    </section>
    
  );
};

export default PersonalData;