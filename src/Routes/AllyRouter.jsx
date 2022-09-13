
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import Page404 from "../pages/Page404"

function AllyRouter() {

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/404" element={<Page404 />} />
        </Routes>
    );
}

export default AllyRouter;