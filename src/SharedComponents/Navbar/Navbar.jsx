
import Headroom from "react-headroom";
import { IoMoon } from "react-icons/io5";
import { MdDashboard, MdSunny } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useTheme from "../../CustomHocks/useTheme";
import useUser from "../../CustomHocks/useUser";
import { LuLogOut } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/Logo/logo.jpg'


const Navbar = () => {

    const [themeData, handelTheme] = useTheme()
    const { user, logOutUser } = useUser()

    const handelLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('logout completed')
            })
    }

    

    const nav = <>
        <NavLink><li>HOME</li></NavLink>
        <NavLink><li>ABOUT US</li></NavLink>
        <NavLink><li>CONTACT US</li></NavLink>
    </>
    return (
        <Headroom className="z-[9999] sticky">
            <ToastContainer></ToastContainer>
            <nav className=" bg-[#ffffff] z-[9999]">
                <div className="navbar z-50 top-0   max-w border-b-2">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {nav}
                            </ul>
                        </div>
                        <Link to={'/'} className="w-20 h-10   px-0 flex items-center overflow-hidden"><img className="w-full h-full" src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-end  lg:flex">
                        <ul className="menu menu-horizontal px-1 lg:flex items-center py-0 hidden">
                            {
                                nav
                            }
                        </ul>

                        <button onClick={handelTheme} className=" text-xl hover:bg-[#00000049] mx-2 p-2 rounded-full" title="Theme">{themeData === 'light' ? <MdSunny /> : <IoMoon />}</button>
                        {
                            user ? <div title={user?.displayName} className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-2 border-[#8d3ad1e3] flex flex-row justify-center items-center">
                                    {
                                            user?.photoURL ? <img alt="user" src={user?.photoURL} />:
                                            <img alt="user" src='https://i.ibb.co/kMcSvFW/user.webp' />
                                    }
                                       
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg shadow-[#8355b8] menu menu-sm dropdown-content bg-base-100 rounded-sm w-40">
                                    <p className=" text-center underline font-bold bg-[#8d3ad1e3] text-white py-2 uppercase">{user?.displayName}</p>
                                    <NavLink><li className="border-b-2 flex flex-row items-center"> <span><MdDashboard /></span> DashBoard</li></NavLink>
                                    <li onClick={handelLogOut} className=" border-b-2 flex flex-row items-center ">  <span><LuLogOut /></span>Logout</li>

                                </ul>
                            </div> :
                                <ul className="flex">
                                    <NavLink to={'/login'}><li className="bg-[#000000b5] text-white">Login</li></NavLink>
                                    <NavLink to={'/register'}><li className="bg-[#000000b5] text-white">Register</li></NavLink>
                                </ul>
                        }

                    </div>

                </div>
            </nav>
        </Headroom>
    );
};

export default Navbar;