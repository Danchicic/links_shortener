import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateShortLinkPage from "../pages/CreateShortLinkPage.jsx";
import RedirectPage from "../pages/RedirectPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route key="createShortLink" path='/' element={<CreateShortLinkPage/>} exact={true}/>
            <Route key="Redirect" path='/links/:id' element={<RedirectPage/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;