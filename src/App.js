import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/index";
import SignUpPage from "./pages/SignUpPage/index";
import Page404 from "./pages/Page404";



function App() {
  return (
    <div>
        <Router>
      <Nav />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
