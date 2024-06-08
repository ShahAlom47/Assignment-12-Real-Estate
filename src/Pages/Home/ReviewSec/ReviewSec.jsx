
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowAltCircleDown, FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import LoadingRing from "../../../SharedComponents/LoadingRing/LoadingRing";



const ReviewSec = () => {
    const axiosPublic = useAxiosPublic()
    const [slideItem, setSlideItem] = useState(1)
    const isSmall = useMediaQuery({ query: '(max-width: 767px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1024px)' });
    const [isLatest, setLatest] = useState(false)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['allReview',],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allReview?laTest=${isLatest}`,)
            return res.data
        }
    })


    useEffect(() => {
        refetch()
    }, [isLatest, refetch])
    const handelLatest = () => {
        setLatest(true)
    }

  
    useEffect(() => {
        if (isSmall) {
            setSlideItem(1);
        } else if (isMedium) {
            setSlideItem(2);
        } else if (isLarge) {
            setSlideItem(4);
        }
    }, [isSmall, isMedium, isLarge]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };


    const slideData = [];
    for (let i = 0; i < data?.length; i += slideItem) {
        slideData.push(data?.slice(i, i + slideItem));
    }

    return (
        <div className=' '>
            <div className=' max-w p-12'>
                <div className="flex justify-between">
                    <div className=' inline-block p-3 px-5 ml-3 ' style={{ boxShadow: '-15px 15px 7px -10px rgb(27, 67, 100)' }}>
                        <h1 className='text-2xl lg:text-4xl ml-5 font-semibold '>See what others<br />
                            said about <span className=' font-bold'> Our Property</span></h1>
                    </div>
                    <div className=" flex items-end">
                        <button onClick={handelLatest} className="btn btn-sm rounded-sm border-none bg-slate-400">Latest <FaArrowAltCircleDown></FaArrowAltCircleDown></button>
                    </div>
                </div>

                {
                    isLoading ? <LoadingRing></LoadingRing> :
                        <div className="my-12">

                            <Slider {...settings}>
                                {slideData.map((data, index) => (
                                    <div key={index} className=" ">
                                        <div className="grid gap-12 lg:grid-cols-2 md:grid-cols-2 ">
                                            {data.map(rev => (
                                                <div key={rev._id} className="flex gap-6">
                                                    <div>
                                                        <img className=" rounded-full h-16 w-16" src={rev.user_photo} alt="photo" />

                                                    </div>
                                                    <div className="flex-1">
                                                        <h1 className="font-bold textarea-xl uppercase">{rev.user_name}</h1>
                                                        <h2 className="font-semibold pb-3 border-b-2 flex items-center gap-2">Property: {rev.property_title}
                                                            <Link to={`/details/${rev.property_id}`}>
                                                                <FaArrowCircleRight className=" hover:bg-slate-400 p-1 text-xl rounded-full"></FaArrowCircleRight>
                                                            </Link>
                                                        </h2>
                                                        <p className=" my-3">{rev.review}</p>


                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                ))}
                            </Slider>
                        </div>
                }



            </div>

        </div>
    );
};

export default ReviewSec;