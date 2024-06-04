import useUser from "../../CustomHocks/useUser";
import useUserRole from "../../CustomHocks/useUserRole";


const UserProfileLayout = () => {
    const {user}=useUser();
    const {data}=useUserRole();

    return (
            <div className=" flex flex-col items-center justify-center lg:p-10 md:p-6 p-3 ">
               <div className=" flex justify-center items-center flex-col bg-slate-300 p-6 rounded-md">
               <div className=" w-28 h-28">
                    <img className="w-full h-full rounded-full border-2 border-black" src={user?.photoURL} alt="" />
                </div>
                <h1 className=" text-lg font-semibold uppercase  border-b-2">{data}</h1>
                <h1 className=" text-xl font-semibold"> <span className="font-medium ">{user?.displayName}</span></h1>
                <h1 className="  font-semibold">email: <span className="font-medium ">{user?.email}</span></h1>
                
               </div>

            </div>
           
            
        
    );
};

export default UserProfileLayout;