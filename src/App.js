import { useState } from 'react';
import './App.css';
import DashBoard from './comps/DashBoard';
import SignUp from './comps/SignUp';

function App() {
 let [isLoggedIn, setIsLogged] = useState(true)
  return (
    <div className="App">
       {isLoggedIn ? <DashBoard /> : <SignUp />}
    </div>
  );
}

export default App;
