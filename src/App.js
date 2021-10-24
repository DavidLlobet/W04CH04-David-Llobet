import { useState } from 'react';
import Context from './context/Context';
import './App.css';
import PersonalData from './components/Personal data/Personal data';
import AccessData from './components/Access data/Access data';
import Login from './components/Login/Login';

function App() {

      const [count, setCount] = useState(0);

      const goBack = () => {
        setCount(count - 1)
      }
      
      const goForward = () => {
        setCount(count + 1)
      }

  return (

     <Context.Provider
      value={{count, setCount, goBack, goForward}}
    >
      {count === 0 ? <PersonalData formName={"Personal data"}/> : ""}
      {count === 1 ? <AccessData formName={"Access data"}/> : ""}
      {count === 2 ? <Login formName={"Login"}/> : ""} 
     
 
    
     </Context.Provider>

  );
}

export default App;
