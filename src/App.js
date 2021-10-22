import Context from './context/Context';
import './App.css';
import PersonalData from './components/Personal data/Personal data';

function App() {
  return (
    
     <Context.Provider
      value={{}}
    >
         <PersonalData formName={"Personal data"} />

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
     </Context.Provider>

  );
}

export default App;
