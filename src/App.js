
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'


function App() {
   const [mode, setMode]=useState("light");
   const [btnText, setBtnText]=useState("Enable Dark Mode")
   const toggleMode=()=>
   {
      if(mode==="dark")
      {
        setMode("light");
        setBtnText("Enable Dark Mode");
        document.body.style.backgroundColor='white';
      }
      else{
        setMode("dark")
        setBtnText("Disable Dark Mode");
        document.body.style.backgroundColor='gray';
      } 
   }
  return (
  <>
  <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
  <TextArea heading="Enter the Text Below" mode={mode} />
  </>
  );
}

export default App;
