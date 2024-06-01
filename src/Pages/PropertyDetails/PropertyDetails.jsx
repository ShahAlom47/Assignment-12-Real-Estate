import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import useAxiosPublic from "../../CustomHocks/useAxiosPublic";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";
import { PiBuildingsLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { FaArrowAltCircleRight, FaBath, FaMobile, FaVoicemail } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { CiShare2 } from "react-icons/ci";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { GoStar } from "react-icons/go";
import { MdAddChart } from "react-icons/md";
import useUser from "../../CustomHocks/useUser";
import { useEffect, useState } from "react";
import ErrorPage from "../ErrorPage/ErrorPage";

const PropertyDetails = () => {
    const { id } = useParams()
    const { user } = useUser();
    const [reviewErr, setReviewErr] = useState(true)
    const axiosPublic = useAxiosPublic()
    const location = useLocation()


    const { data, isLoading,error } = useQuery({
        queryKey: ['propertyDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/property/${id}`)
            return res.data
        }
    })
    useEffect(() => {
        setReviewErr(false)
    }, [])


    const handelReview = (id) => {
        setReviewErr(false)
        if (!user) {
            setReviewErr(true)
            return
        }
        document.getElementById('my_modal_5').showModal()
    }
    const handelReviewForm =(e)=>{
        e.preventDefault()
        const form = e.target ;
        const  review= form.review.value;
        const rating = form.rating.value;
        const reviewData= {
            review,rating,
            property_title:data.title,
            property_id:data._id,
            agent_photo:data.agent_photo ,
            agent_name:data.agent_name,
            user_name:user.displayName,
            user_photo:user.photoURL,
            user_email:user.email,
            date : new Date().toISOString(),
        
        }
        console.log(reviewData);


    }

    if (isLoading) {
        return <LoadingRing></LoadingRing>
    }
    if (error) {
        return <ErrorPage btn={true}></ErrorPage>
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
                <div className=" flex-1" >
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
                                data.amenities.map((data, index) => <p className="flex items-center gap-2" key={index}><FaArrowAltCircleRight />{data}</p>)
                            }
                        </div>
                    </div>


                    <div className=" border p-3">
                        <div className=" flex justify-between border-b-2 pb-3">
                            <h1 className="text-xl font-semibold">Reviews</h1>
                            <div>
                                <button onClick={handelReview} className="font-semibold flex items-center gap-1 title-t"><MdAddChart /> Add Review</button>
                                {
                                    reviewErr ? <p className="text-red-600">Login is required
                                        <Link to={'/login'} state={location.pathname}><button className="btn btn-link"> LogIn</button></Link>
                                    </p> : ''
                                }
                            </div>
                        </div>
                        <div className="">


                        </div>


                    </div>

                </div>

                {/* modal */}



                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <form onSubmit={handelReviewForm}>
                            <label className="form-control w-full ">
                                <span className="label-text font-semibold"> Review</span>
                            </label>
                            <textarea className="border-2 w-full " placeholder="Review" rows={5} name="review" id=""></textarea>
                            <label className="form-control w-full mb-3">
                                <span className="label-text font-semibold"> * Rating:</span>
                                <input type="number" name="rating" max={5} min={1} placeholder="Rating" className="input input-bordered w-full rounded-sm" />
                            </label>
                            <input type="submit" className=" bg-green-500 btn btn-sm w-full" value="Review" />
                        </form>
                        <div className="modal-action w-full">
                            <form method="dialog" className="w-full rounded-sm">
                                <button className="btn btn-sm w-full rounded-sm">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>


                {/* -----------------------------------------
                ASIDE
                --------------------------------------------- */}
                <aside className=" w-4/12  p-3">
                    <div className=" border p-3 mb-4 ">
                        <div className="flex justify-between border-b-2 pb-3">
                            <h1 className="font-bold text-xl">Price:</h1>
                            <h1 className="font-bold text-xl">{data.price_range} $</h1>
                        </div>
                        <div className="flex justify-between mt-3">
                            <Link><button className="flex gap-1 items-center hover:text-red-600"> <GoStar /> Add to Wishlist</button></Link>
                            <Link><button data-tooltip-id="my-tooltip" data-tooltip-content="Share"  ><CiShare2 /></button></Link>
                            <Tooltip id="my-tooltip" className='z-20' />
                        </div>

                    </div>
                    <div className=" border p-3 mb-4 bg-[#9ca1a5b8]">
                        <div className=" flex gap-3">
                            <div className="w-3/12">
                                <img className="w-full rounded-md" src={data.agent_photo} alt="" />
                            </div>
                            <div>
                                <p>NEW HOME</p>
                                <h1 className="text-xl font-semibold">{data.agent_name}</h1>
                            </div>
                        </div>
                        <p className="flex  justify-between border-b-2 border-t-2 mt-6 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><FaMobile /> Office Phone:</span> <span className=" font-semibold"> +0562566887</span></p>
                        <p className="flex  justify-between border-b-2   pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><FaMobile /> Phone:</span> <span className=" font-semibold"> +0562596833</span></p>
                        <p className="flex  justify-between border-b-2 pb-1 mb-2 pr-4"> <span className="flex gap-2 items-center"><FaVoicemail /> Email:</span> <span className=" font-semibold">{data.agent_name}@gmail.com</span></p>
                        <Link><button className=" btn rounded-sm my-3 bg-yellow-500 w-full border-none">View My Property </button></Link>
                    </div>

                </aside>
            </section>


        </div>
    );
};

export default PropertyDetails;