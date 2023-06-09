import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserControl from './pages/UserControl';
import Welcome from './pages/Welcome';

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Login/>} path="/entrar"/>
                <Route element={<SignUp/>} path="/cadastre-se" exact/>
                <Route element={<UserControl/>} path="/usuarios"/>
                <Route element={<Welcome/>} path="/" exact/>
            </Routes>
        </>
    )
}

export default AppRoutes;