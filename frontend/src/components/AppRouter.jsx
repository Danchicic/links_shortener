import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreatePasswordPage from "../pages/CreatePasswordPage.jsx";
import RedirectPage from "../pages/RedirectPage.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route key="createShortLink" path='/' element={<CreatePasswordPage/>} exact={true}/>
            <Route key="Redirect" path='/links/:id' element={<RedirectPage/>} exact={true}/>
        </Routes>
    );
};

export default AppRouter;