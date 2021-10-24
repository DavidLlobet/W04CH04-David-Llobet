import { useContext } from "react";
import Context from "../../context/Context";

const Login = ({formName}) => {   
    
    const {goBack} = useContext(Context);

    return (
        <section classNameName
   ="personal-data">
      <h2>{formName}</h2>
      <form classNameName
      ="row g-3 needs-validation" noValidate>
         <div className="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
   
  </div>
  <div classNameName="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
          <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember password</label>
  </div>
      
         <div classNameName
         ="col-12">
        <button classNameName
        ="btn btn-primary" type="submit">Log in</button>
      </div>         
      </form>
           <footer classNameName="grid column">
    
    <button onClick={goBack}>Previous</button>
  </footer>
    </section>
    )
}

export default Login;