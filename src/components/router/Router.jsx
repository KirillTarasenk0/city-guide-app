import {useNavigate, useRoutes, Navigate} from "react-router-dom";
import {Header} from "../header/Header";
import {Home} from "../../pages/home/Home";
import {Registration} from "../../pages/registration/Registration";

export const Router = () => {
    const isRegistered = true;
    return useRoutes([
        {
            path: '/',
            element: isRegistered ? <Navigate to="/home" /> : <Registration/>,
            /*path: '/',
            element: <Header/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
            ],*/
        },
        {
            path: '/registration',
            element: <Registration/>,
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