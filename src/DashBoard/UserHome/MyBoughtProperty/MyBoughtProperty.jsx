
import useUser from "../../../CustomHocks/useUser";
import useAxios from "../../../CustomHocks/useAxios";
import { useQuery } from "@tanstack/react-query";

import { CiLocationOn } from "react-icons/ci";
import LoadingRing from "../../../SharedComponents/LoadingRing/LoadingRing";
import { Link } from "react-router-dom";


const MyBoughtProperty = () => {
    const { user } = useUser()
    const axiosSecure = useAxios()

    const { data, isLoading  } = useQuery({
        queryKey: ['myBoughtProperty'],
        queryFn: async () => {
            const res= await axiosSecure(`/offeredProperty/${user?.email}`)
            return res.data ;
        }
    })

    console.log(data);

    return (
        <div className="p-8 ">
            <div className=" border-b-2 pb-3">
                <h1 className="text-3xl font-bold">My Bought Property </h1>
            </div>

            <div>
            {
                isLoading ? <LoadingRing></LoadingRing> : <div className="space-y-3 my-5">
                    {
                        data?.map((wish) => <div key={wish._id}>

                            <div className="card card-side bg-base-100 shadow-xl flex flex-col lg:flex-row md:flex-row">
                                <figure className="lg:w-4/12 md:w-4/12 "><img src={wish.property_image} alt="Movie" /></figure>
                                <div className="card-body py-3">
                                    <h2 className="card-title">{wish.property_title}</h2>
                                    <p className="flex items-center"> <CiLocationOn /> {wish.property_location}</p>

                                    <div className="card-actions  mt-2 md:flex lg:flex items-end ">
                                    <div className=" flex items-center gap-3 font-semibold bg-slate-300 rounded-sm p-1">
                                       <img className=" rounded-full w-10 h-10" src={wish.agent_photo} alt="" />
                                       <p>{wish.agent_name}</p>
                                    </div>
                                    
                                    </div>
                                    <div className=" border-t-2 py-3  items-end flex-wrap flex gap-4">
                                        <h1 className=" font-bold"> Offered Price :<span className="text-xl font-bold">$ {wish.price}</span></h1>
                                        <h2 className={` w-24 text-center rounded-sm ${wish.verification_status==='Verified'? 'bg-green-500': 'bg-yellow-500'}`}>{wish.verification_status}</h2>
                                        <Link disabled={wish.verification_status==='accepted'?false: true}><button className={`${wish.verification_status==='accepted'?'': "opacity-25 "} btn btn-sm border-green-500 rounded-sm`} >Pay</button></Link>
                                    </div>
                                </div>
                                
                            </div>

                        </div>)

                    }


                </div>
            }


            </div>

        </div>
    );
};

export default MyBoughtProperty;