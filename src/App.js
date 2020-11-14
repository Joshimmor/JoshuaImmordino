import './App.css';
import React,{useState} from "react";
import Home from "./Components/Home/Home"


function App() {
  const[darkMode,darkModeFunc] = useState(false)
  return (
    <div className={darkMode?"App":"App-light"}>
      <Home darkMode={darkMode} darkModeFunc={darkModeFunc}/>
    </div>
  );
}

export default App;
