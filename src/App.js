import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <NoteState>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </NoteState>
      </div>
    </BrowserRouter>
  );
}

export default App;
