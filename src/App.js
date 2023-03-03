// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alerts from "./components/Alerts";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messages, type) => {
    setAlert({
      msg: messages,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.text = "white";
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.text = "black";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
      <HashRouter basename="/">
        <Navbar title="UDEMY" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyse"
                  mode={mode}
                />
              }
            />
            <Route exact path="about/*" element={<About mode={mode} />} />
          </Routes>
        </div>
        </HashRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
