import {useRoutes} from "react-router-dom";
import {Header} from "../header/Header";
import {Home} from "../../pages/home/Home";

export const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <Header/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
            ],
        },
    ]);
}