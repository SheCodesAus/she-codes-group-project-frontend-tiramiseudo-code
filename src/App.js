import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage/index";
import AllUsersPage from "./pages/AllProfilesPage/index";
import OneUserPage from "./pages/ProfileViewPage/index";
import HelloPage from "./pages/HelloPage"
import Page404 from "./pages/Page404";
import SignUpPage from "./pages/SignUpPage/index";

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
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
