
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
<<<<<<< Updated upstream
import SignUpPage from "../pages/SignUpPage";
=======
import AllUsersPage from "../pages/AllProfilesPage";
import OneUserPage from "../pages/ProfileViewPage"
import SignUpPage from "../pages/SignUpPage"
import LoginPage from "../pages/LoginPage"
import ProfileViewPage from "../pages/ProfileViewPage"
>>>>>>> Stashed changes
import Page404 from "../pages/Page404"

function AllyRouter() {

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
<<<<<<< Updated upstream
            <Route path="/signup" element={<SignUpPage />} />
=======
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profileviewpage" element={<ProfileViewPage />} />
>>>>>>> Stashed changes
            <Route path="/404" element={<Page404 />} />
        </Routes>
    );
}

export default AllyRouter;