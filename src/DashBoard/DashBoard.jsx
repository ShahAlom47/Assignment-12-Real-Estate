import { FaBook, FaCalendarAlt, FaCalendarCheck, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useUser from "../CustomHocks/useUser";
import useUserRole from "../CustomHocks/useUserRole";
import { TbJewishStar } from "react-icons/tb";
import { MdOutlineAssessment } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";






const DashBoard = () => {
    const isAdmin = true;
    const { user } = useUser()
    const {data} = useUserRole()


    // const [isAdmin]=useAdmin()


    console.log(data);

    return (
        <div className=" lg:flex  max-w">

            <div className="p-10 lg:w-3/12 lg:min-h-screen  bg-[#D1A054]">
                <div className="mb-5  border-b-2 border-gray-700  ">
                    <h1 className="text-2xl font-bold">HONEST</h1>
                    <p className="font-semibold  ">Real Estate</p>
                </div>
                <div className="space-y-2 flex lg:flex-col flex-row">
            {user && data === 'admin' ? (
                <div className="flex lg:flex-col">
                    <NavLink to={'/dashBoard/adminHome'}>
                        <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                            <FaHome /> Admin Profile
                        </button>
                    </NavLink>
                </div>
            ) : null}

            {user && data === 'agent' ? (
                <NavLink to={'/dashBoard/agentHome'}>
                    <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                        <FaHome /> Agent Profile
                    </button>
                </NavLink>
            ) : null}

            {user && data !== 'agent' && data !== 'admin' ? (
               <>
                <NavLink to={'/dashBoard/userHome'}>
                    <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                        <FaHome /> My Profile
                    </button>
                </NavLink>
                <NavLink to={'/dashBoard/userWishList'}>
                    <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                    <TbJewishStar /> WishList
                    </button>
                </NavLink>
                <NavLink to={'/dashBoard/userPropertyBought'}>
                    <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                    <MdOutlineAssessment /> Property Bought
                    </button>
                </NavLink>
                <NavLink to={'/dashBoard/userReview'}>
                    <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold">
                    <VscPreview /> My Reviews.
                    </button>
                </NavLink>
               </>
            ) : null}

            <hr />

            <NavLink to={'/'}>
                <button className="flex items-center gap-2 hoverBtn hover:text-white font-semibold mt-5">
                    <FaHome /> Home
                </button>
            </NavLink>
        </div>


            </div>

            <div className="lg:flex-1 py- bg-gray-100">
                <Outlet></Outlet>

            </div>

        </div>
    );
};

export default DashBoard;