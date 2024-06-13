import {useRoutes, Navigate} from "react-router-dom";
import {Header} from "../header/Header";
import {Home} from "../../pages/home/Home";
import {Registration} from "../../pages/registration/Registration";
import {Login} from "../../pages/login/Login";

export const Router = () => {
    const isRegistered = true;
    return useRoutes([
        {
            path: '/',
            element: isRegistered ? <Navigate to="/home" /> : <Registration/>,
        },
        {
            path: '/registration',
            element: <Registration/>,
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/home',
            element: isRegistered ? <>
                <Header/>
                <Home/>
            </> : <Navigate to="/registration" />,
        }
    ]);
}