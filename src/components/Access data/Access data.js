import { useContext } from "react";
import Context from "../../context/Context";

const AccessData = ({formName}) => {

    const { goBack, goForward} = useContext(Context);

    return (
        <section className
   ="personal-data">
      <h2>{formName}</h2>
      <form className
      ="row g-3 needs-validation" novalidate>
         <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""/>
  </div>
        
            <div className
            ="row-md-4">
          <label for="validationCustomUsername" className
          ="form-label"
            >Repeat Password</label
          >
          <div className
          ="input-group has-validation">
            
            <input
              type="text"
              className
              ="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </div>
          
        </div>
               
      </form>
       <footer class="grid column">
    
    <button onClick={goBack}>Previous</button>
    <button onClick={goForward}>Next</button>

  </footer>
    </section>
    )
}

export default AccessData;