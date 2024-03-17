
import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
 const [mode, setMode]= useState('light');// Whether dark mode is enabled or not
 const [alert, setAlert] =useState(null);
 
  const ShowAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
 const togglemode = () => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      ShowAlert("dark mode enabled" , "sucess")
      document.tittle = 'Textutils - Dark Mode';
  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode enabled" , "sucess")
      document.tittle = 'Textutils - Lght Mode';

  }
};
  return (
    <>
{/* <Navbar  title="Textutils" aboutText="About US"/> */}
{/* <Navbar /> */}
<Navbar title="Textulits" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Textform alert={alert}heading="Enter The text to analyze"mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
