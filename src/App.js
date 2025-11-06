import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Alert from "./components/Alert";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });
  const [alert, setAlert] = useState(null);
  const timeRef = useRef(null);
  useEffect(() => {
    if (mode === "light") {
      document.body.style.color = "black";
      document.body.style.background = "white";
    } else {
      document.body.style.background = "var(--bs-gray-900)";
      document.body.style.color = "white";
    }
    localStorage.setItem("mode", mode);
  }, [mode]);
  const changeMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    getAlert(`${mode === "dark" ? "light" : "dark"} mode enabled`, "success");
  };
  const getAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      setAlert(null);
      timeRef.current = null;
    }, 2000);
  };
  return (
    <>
      <Navbar mode={mode} toggler={changeMode} />
      <Alert alert={alert} setAlert={setAlert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <TextForm
                title="Enter text to analyzee"
                mode={mode}
                getAlert={getAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
