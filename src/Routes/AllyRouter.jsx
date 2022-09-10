
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";

function AllyRouter() {

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
        </Routes>
    );
}

export default AllyRouter;