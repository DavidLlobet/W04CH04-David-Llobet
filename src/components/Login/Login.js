const Login = ({formName}) => {
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
          <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember password</label>
  </div>
      
         <div className
         ="col-12">
        <button className
        ="btn btn-primary" type="submit">Log in</button>
      </div>         
      </form>
    </section>
    )
}

export default Login;