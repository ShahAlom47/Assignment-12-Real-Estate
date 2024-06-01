import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";
import { PiBuildingsLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaBath } from "react-icons/fa";
import { Helmet } from "react-helmet";

const PropertyDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const { data, isLoading } = useQuery({
        queryKey: ['propertyDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/property/${id}`)
            return res.data
        }
    })
    console.log(data);
    if (isLoading) {
        return <LoadingRing></LoadingRing>
    }
    return (
        <div className="max-w p-5">
            <Helmet>
                <title>Honest | Details Page </title>
            </Helmet>

            <div className=" h-[512px] flex gap-5 my-5">
                <div className="h-[512px] ">
                    <img className=" h-full" src={data.property_image} alt="" />
                </div>
                <div className=" flex w-1/2  gap-3 h-[512px]">
                    <div className="space-y-3 flex-grow h-[500px] ">
                        <div className=" h-1/2"><img className=" h-full" src={data.property_image} alt="" /></div>
                        <div className="h-1/2"><img className=" h-full" src={data.property_image} alt="" /></div>
                    </div>
                    <div className="space-y-3 h-[500px]">
                        <div className="h-1/2"><img className=" h-full" src={data.property_image} alt="" /></div>
                        <div className="h-1/2"><img className=" h-full" src={data.property_image} alt="" /></div>
                    </div>
                </div>

            </div>


            <section className=" flex gap-5 ">
                <div className=" border-4 flex-1" >
                    <p className="inline bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md"> {data.verification_status}</p>
                    <h1 className="my-2 text-3xl font-semibold">{data?.title}</h1>
                    <div id="description" className=" my-3">
                        <h1 className=" mb-2 text-xl font-semibold">Property Type</h1>
                        <p className="bg-gray-300 text-slate-700 inline px-3 py-1 rounded-sm">{data?.property_type}</p>
                    </div>
                    <div id="description" className=" my-3">
                        <h1 className=" mb-2 text-xl font-semibold">Description</h1>
                        <p>{data.description}</p>
                    </div>
                    <div id="description" className=" my-3"> 
                        <h1 className=" mb-2 text-xl font-semibold">Property Details</h1>
                        <div className=" grid grid-cols-2 gap-3"> 
                            <p className="flex  justify-between border-b-2 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><PiBuildingsLight /> Size:</span> <span className=" font-semibold"> {data.square_feet} sqF</span></p>
                            <p className="flex  justify-between border-b-2 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><IoBedOutline /> Bedrooms</span> <span className=" font-semibold"> {data.bedrooms}</span></p>
                            <p className="flex  justify-between border-b-2 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><FaBath /> Bathrooms:</span> <span className=" font-semibold"> {data.bathrooms}</span></p>
                            <p className="flex  justify-between border-b-2 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><PiBuildingsLight /> Year built:</span> <span className=" font-semibold"> {data.year_built}</span></p>
                  
                        </div>
                    </div>
                    <div id="description" className=" my-3"> 
                        <h1 className=" mb-2 text-xl font-semibold">Amenities</h1>
                        <div className=" grid grid-cols-2 gap-1"> 
                           {
                            data.amenities.map((data,index)=><p className="flex items-center gap-2" key={index}><FaArrowAltCircleRight/>{data}</p>)
                           }
                        </div>
                    </div>

                </div>
                <aside className=" w-4/12 border-4">

                </aside>
            </section>


        </div>
    );
};

export default PropertyDetails;