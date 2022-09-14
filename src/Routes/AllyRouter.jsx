
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";

import SignUpPage from "../pages/SignUpPage";
import AllUsersPage from "../pages/AllProfilesPage";
import OneUserPage from "../pages/ProfileViewPage"
import SignUpPage from "../pages/SignUpPage"
import LoginPage from "../pages/LoginPage"
import ProfileViewPage from "../pages/ProfileViewPage"
import Page404 from "../pages/Page404"


function AllyRouter() {

    return(
        <Routes>
            <Route exact path="/allProfiles" element={<AllUsersPage />} />
            <Route exact path="/ProfileView/:id" element={<OneUserPage />} />
            <Route exact path="/SignUp" element={<SignUpPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profileviewpage" element={<ProfileViewPage />} />
            <Route path="/404" element={<Page404 />} />

        </Routes>
    );
}

export default AllyRouter;