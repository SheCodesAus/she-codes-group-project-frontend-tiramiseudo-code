
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllUsersPage from "../pages/AllProfilesPage";
import OneUserPage from "../pages/ProfileViewPage"
import SignUpPage from "../pages/SignUpPage"

function AllyRouter() {

    return(
        <Routes>
            <Route exact path="/allProfiles" element={<AllUsersPage />} />
            <Route exact path="/ProfileView" element={<OneUserPage />} />
            <Route exact path="/SignUp" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default AllyRouter;