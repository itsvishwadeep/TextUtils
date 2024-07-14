import './App.css';
// import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');// Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode = ()=>{
  
    if(mode === 'light'){

      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode Has Been Enabled", "success ")
      
    }
    else{
      
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode Has Been Enabled", "success ")
    
    }
  }

  return (
    <>
                        
            {/* <Navbar title="Wisdom" aboutText="About Wisdom"/> */}
            {/* <Navbar /> */}
            <Router>
            <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
              <Routes>

          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
            <Route exact path ="/" element={<TextForm showAlert={showAlert} heading="Try TextManipulator-Word Counter, Character Counter, Remove Extra Sapaces " mode={mode}/>}>
            
            </Route>
          </Routes>
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
        
            
            </div>
            </Router>
        </>
  
  );
}

export default App;
