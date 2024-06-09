

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
import AgentRoutes from "./AgentRoutes/AgentRoutes";
import AddProperty from "../DashBoard/AgentHome/AddProperty/AddProperty";
import MyAddedProperty from "../DashBoard/AgentHome/MyAddedProperty/MyAddedProperty";
import EditForm from "../DashBoard/AgentHome/MyAddedProperty/EditForm/EditForm";
import RequestedProperty from "../DashBoard/AgentHome/RequestedProperty/RequestedProperty";
import PaymentPage from "../DashBoard/UserHome/PaymentPage/PaymentPage";
import ManageProperties from "../DashBoard/AdminHome/ManageProperties/ManageProperties";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import ManageUser from "../DashBoard/AdminHome/ManageUser/ManageUser";
import ManageReview from "../DashBoard/AdminHome/ManageReview/ManageReview";
import MySoldProperty from "../DashBoard/AgentHome/MySoldProperty/MySoldProperty";
import AdvertiseProperty from "../DashBoard/AdminHome/AdvertiseProperty/AdvertiseProperty";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ViewMyProperty from "../Pages/ViewMyProperty/ViewMyProperty";



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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/viewMyProperty/:email",
        element: <PrivetRouter><ViewMyProperty></ViewMyProperty></PrivetRouter>,
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
      {
        path: "/dashBoard/payment/:id",
        element: <PrivetRouter><PaymentPage></PaymentPage></PrivetRouter>,
      },



      // admin routes 

      {
        path: "/dashBoard/adminHome",
        element:<AdminRoutes> <AdminHome></AdminHome></AdminRoutes>,
      },
      {
        path: "/dashBoard/manageProperties",
        element: <AdminRoutes><ManageProperties></ManageProperties></AdminRoutes>,
      },
      {
        path: "/dashBoard/manageUser",
        element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>,
      },
      {
        path: "/dashBoard/manageReview",
        element: <AdminRoutes><ManageReview></ManageReview></AdminRoutes>,
      },
      {
        path: "/dashBoard/advertise",
        element: <AdminRoutes><AdvertiseProperty></AdvertiseProperty></AdminRoutes>,
      },


      //   agent route

      {
        path: "/dashBoard/agentHome",
        element: <AgentRoutes><AgentHome></AgentHome></AgentRoutes>,
      },
      {
        path: "/dashBoard/addProperty",
        element: <AgentRoutes><AddProperty></AddProperty></AgentRoutes>,
      },
      {
        path: "/dashBoard/myAddedProperty",
        element: <AgentRoutes><MyAddedProperty></MyAddedProperty></AgentRoutes>,
      },
      {
        path: "/dashBoard/myAddedProperty/edit/:id",
        element: <AgentRoutes><EditForm></EditForm></AgentRoutes>,
      },
      {
        path: "/dashBoard/requestedProperty",
        element: <AgentRoutes><RequestedProperty></RequestedProperty></AgentRoutes>,
      },
      {
        path: "/dashBoard/soldProperty",
        element: <AgentRoutes><MySoldProperty></MySoldProperty></AgentRoutes>,
      },


    ]

  },

]);

export default router;