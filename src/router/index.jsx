import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResponsiveAppBar from "../components/Navbar";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";


const Router = () => (
    <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
            <Route path="/" element={<Home />} exact={true} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
