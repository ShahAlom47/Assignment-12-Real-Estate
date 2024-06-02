
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";



const ReviewSec = () => {
    const axiosPublic = useAxiosPublic()
    const [slideItem,setSlideItem]=useState(1)
    const isSmall = useMediaQuery({ query: '(max-width: 767px)' });
    const isMedium = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
    const isLarge = useMediaQuery({ query: '(min-width: 1024px)' });

    const { data } = useQuery({
        queryKey: ['allReview'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allReview')
            return res.data
        }
    })

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
        <div className=' bg-white '>
            <div className=' max-w p-12'>
                <div className=' inline-block p-3 px-5 ml-3 ' style={{ boxShadow: '-15px 15px 7px -10px rgb(27, 67, 100)' }}>
                    <h1 className='text-2xl lg:text-4xl ml-5 font-semibold '>See what others<br />
                        said about <span className=' font-bold'> Our Property</span></h1>
                </div>


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
                                            <h2 className="font-semibold pb-3 border-b-2">Property: {rev.property_title} <FaArrowCircleRight></FaArrowCircleRight></h2>
                                            <p className=" my-3">{rev.review}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    ))}
                </Slider>
               </div>


            </div>

        </div>
    );
};

export default ReviewSec;