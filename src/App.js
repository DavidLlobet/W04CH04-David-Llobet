import Context from './context/Context';
import './App.css';
import PersonalData from './components/Personal data/Personal data';
import AccessData from './components/Access data/Access data';

function App() {
  return (
    
     <Context.Provider
      value={{}}
    >
         <PersonalData formName={"Personal data"} />
         <AccessData formName={"Access data"} />

    
     </Context.Provider>

  );
}

export default App;
