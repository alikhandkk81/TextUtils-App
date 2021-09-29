import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container mt-5">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter your text to Analyze" />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
