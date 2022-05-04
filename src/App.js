import { useState } from 'react';
import './App.css';
import DashBoard from './comps/DashBoard';
import SignUp from './comps/SignUp';

function App() {
 let [isLoggedIn, setIsLogged] = useState(false)
  return (
    <div className="App">
       {isLoggedIn ? <DashBoard /> : <SignUp setLogin={setIsLogged}/>}
    </div>
  );
}

export default App;
