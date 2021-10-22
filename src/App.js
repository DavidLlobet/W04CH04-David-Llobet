
import './App.css';

function App() {
  return (
    <>
         <section className
   ="personal-data">
      <h2>Personal data</h2>
      <form className
      ="row g-3 needs-validation" novalidate>
        <div className
        ="col-md-4">
          <label for="validationCustom01" className
          ="form-label">First name</label>
          <input
            type="text"
            className
            ="form-control"
            id="validationCustom01"
            value=""
            required
          />
    
        </div>
      
        <div className
        ="col-md-4">
          <label for="validationCustom02" className
          ="form-label">Last name</label>
          <input
            type="text"
            className
            ="form-control"
            id="validationCustom02"
            value=""
            required
         />
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
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </div>
          <div>Age</div>
        </div>
         <div className
         ="col-12">
        <button className
        ="btn btn-primary" type="submit">Submit form</button>
      </div>         
      </form>
    </section>

    <section className
   ="personal-data">
      <h2>Access data</h2>
      <form className
      ="row g-3 needs-validation" novalidate>
        <div className
        ="col-md-4">
          <label for="validationCustom01" className
          ="form-label">Username</label>
          <input
            type="text"
            className
            ="form-control"
            id="validationCustom01"
            value=""
            required
          />
    
        </div>
      
        <div className
        ="col-md-4">
          <label for="validationCustom02" className
          ="form-label">Password</label>
          <input
            type="text"
            className
            ="form-control"
            id="validationCustom02"
            value=""
            required
         />
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
         <div className
         ="col-12">
        <button className
        ="btn btn-primary" type="submit">Submit form</button>
      </div>         
      </form>
    </section>
    
</>
  );
}

export default App;
