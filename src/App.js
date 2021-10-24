import Context from './context/Context';
import './App.css';
import PersonalData from './components/Personal data/Personal data';
import AccessData from './components/Access data/Access data';
import Login from './components/Login/Login';

function App() {
  return (


    
     <Context.Provider
      value={{}}
    >
         <PersonalData formName={"Personal data"} />
         <AccessData formName={"Access data"} />
         <Login formName={"Login"} />
               <footer class="grid column">
  <button>Previous</button>
    <button>Next</button>

  </footer>
    
     </Context.Provider>

  );
}

export default App;
