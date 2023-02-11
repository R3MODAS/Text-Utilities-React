import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import TextForm from "./Components/TextForm"
import { useState } from "react"
import Alert from "./Components/Alert"

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleBtn = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#fff";
      document.body.style.transition = "all 0.3s ease";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#1a1a1a";
      document.body.style.transition = "all 0.3s ease";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title = "Text Utilities" mode = {mode} toggleBtn = {toggleBtn}/>
        <Alert alert= {alert} />
        <Routes>
          <Route exact path = "/" element = {<TextForm mode = {mode} showAlert = {showAlert} />} />
          <Route exact path = "/about" element={<About mode = {mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
