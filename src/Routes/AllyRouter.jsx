
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage"
import ProfileViewPage from "../pages/ProfileViewPage"

function AllyRouter() {

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profileviewpage" element={<ProfileViewPage />} />
        </Routes>
    );
}

export default AllyRouter;