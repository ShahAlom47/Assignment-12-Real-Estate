import useUser from "../../CustomHocks/useUser";
import useUserRole from "../../CustomHocks/useUserRole";


const UserProfileLayout = () => {
    const {user}=useUser();
    const {data}=useUserRole();

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 bg-yellow-50 lg:min-h-screen">
            <div className=" flex flex-col items-center justify-center lg:p-10 md:p-6 p-3 ">
               <div className=" flex justify-center items-center flex-col bg-slate-300 p-6 rounded-md">
               <div className=" w-28 h-28">
                    <img className="w-full h-full rounded-full" src={user?.photoURL} alt="" />
                </div>
                <h1 className=" text-lg font-semibold uppercase  border-b-2">{data}</h1>
                <h1 className=" text-xl font-semibold"> <span className="font-medium ">{user?.displayName}</span></h1>
                <h1 className="  font-semibold">email: <span className="font-medium ">{user?.email}</span></h1>
                
               </div>

            </div>
            <div className=" flex flex-col items-start justify-center lg:p-10 md:p-6 p-3 lg:pl-3 ">
               <div className=" w-full space-y-3">
               <div className=" bg-slate-300 rounded-r-full w-full p-3 pr-5 font-semibold "> Reviews: <span className="font-medium">120</span> </div>
               <div className=" bg-slate-300 rounded-r-full w-full p-3 pr-5 font-semibold "> Reviews: <span className="font-medium">120</span> </div>
               <div className=" bg-slate-300 rounded-r-full w-full p-3 pr-5 font-semibold "> Reviews: <span className="font-medium">120</span> </div>
               <div className=" bg-slate-300 rounded-r-full w-full p-3 pr-5 font-semibold "> Reviews: <span className="font-medium">120</span> </div>
                
               </div>

            </div>
            
        </div>
    );
};

export default UserProfileLayout;