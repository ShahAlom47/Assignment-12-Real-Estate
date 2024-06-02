

import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Register/Register";
import Login from "../Pages/Authentication/Login/Login";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import PrivetRouter from "./PrivetRouter/PrivetRouter";
import AllProperty from "../Pages/AllProperty/AllProperty";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/details/:id",
                element: <PropertyDetails></PropertyDetails>,
            },
            {
                path: "/allProperty",
                element: <PrivetRouter><AllProperty></AllProperty></PrivetRouter>,
            },
        ]
    },
]);

export default router;