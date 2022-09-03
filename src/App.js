import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/index";


function App() {
  return (
    <div>
        <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
