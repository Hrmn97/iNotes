import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Alert from "./components/Alert";

function App() {
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Alert alert={alert} /> */}
      <div className="container">
        <NoteState>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </NoteState>
      </div>
    </BrowserRouter>
  );
}

export default App;
