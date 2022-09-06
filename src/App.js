import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/index";
import AllUsersPage from "./pages/AllProfilesPage/index";
import OneUserPage from "./pages/ProfileViewPage/index";
import HelloPage from "./pages/HelloPage"

function App() {
  return (
    <div>
        <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/AllProfiles" element={<AllUsersPage />} />
        <Route exact path="/ProfilesView" element={<OneUserPage />} />
        <Route exact path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
    </div>
   
  );
}

export default App;
