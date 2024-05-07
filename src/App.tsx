
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from "./components/landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./components/game";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/game" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
