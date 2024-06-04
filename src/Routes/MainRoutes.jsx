

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
import DashBoard from "../DashBoard/DashBoard";
import UserHome from "../DashBoard/UserHome/UserHome";
import AdminHome from "../DashBoard/AdminHome/AdminHome";
import AgentHome from "../DashBoard/AgentHome/AgentHome";
import WishList from "../DashBoard/UserHome/WishList/WishList";
import MakeOffer from "../DashBoard/UserHome/MakeOffer.jsx/MakeOffer";
import MyReviews from "../DashBoard/UserHome/MyReviews/MyReviews";
import MyBoughtProperty from "../DashBoard/UserHome/MyBoughtProperty/MyBoughtProperty";



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
                element: <PrivetRouter><PropertyDetails></PropertyDetails></PrivetRouter>,
            },
            {
                path: "/allProperty",
                element: <PrivetRouter><AllProperty></AllProperty></PrivetRouter>,
            },
        ]
    },
    {
        path: "/dashBoard",
        element: <PrivetRouter><DashBoard></DashBoard></PrivetRouter>,
        errorElement: <ErrorPage />,
        children: [
    // user routes
    
          {
            path: "/dashBoard/userHome",
            element: <PrivetRouter><UserHome></UserHome></PrivetRouter>,
          },
          {
            path: "/dashBoard/userWishList",
            element: <PrivetRouter><WishList></WishList></PrivetRouter>,
          },
          {
            path: "/dashBoard/makeOffer/:id",
            element: <PrivetRouter><MakeOffer></MakeOffer></PrivetRouter>,
          },
          {
            path: "/dashBoard/myBoughtProperty",
            element: <PrivetRouter><MyBoughtProperty></MyBoughtProperty></PrivetRouter>,
          },
          {
            path: "/dashBoard/myReviews",
            element: <PrivetRouter><MyReviews></MyReviews></PrivetRouter>,
          },
      
       
    
          // admin routes 
    
          {
            path: "/dashBoard/adminHome",
            element: <AdminHome></AdminHome>,
          },
        

        //   agent route

        {
            path: "/dashBoard/agentHome",
            element: <AgentHome></AgentHome>,
          },


        ]
    
      },
    
]);

export default router;