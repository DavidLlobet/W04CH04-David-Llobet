const AccessData = ({formName}) => {
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
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
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
    )
}

export default AccessData;