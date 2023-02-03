import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // States
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1D1E1E";
      document.body.style.transition = "all 0.4s ease";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.transition = "all 0.4s ease";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Utilities" mode={mode} toggle={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
