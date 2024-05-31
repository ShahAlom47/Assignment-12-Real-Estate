import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slide1 from '../../../assets/slides/slide1.jpg'
import slide2 from '../../../assets/slides/slide2.jpg'
import slide3 from '../../../assets/slides/slide3.jpg'
import slide4 from '../../../assets/slides/slide4.jpg'


import { Link } from 'react-router-dom';

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    };



    return (
        <Swiper

        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 3700,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        speed={1500}
        className="mySwiper relative  "
    >
        <SwiperSlide>
            <div className='relative'>
                <img className= 'h-[600px] gradient-overlay w-full rounded-lg' src={slide1} alt="" />
                <div className="overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                    <div className="animate__animated animate__fadeInRight text-center  flex flex-col items-center h-full w-full absolute top-1/4 ">
                        <p className=" uppercase  font-mont text-white"> Come to experience in Turio</p>
                        <h1 className='lg:text-7xl uppercase text-2xl font-mont font-bold text-green-400 mb-2'>Cox's Bazar
                           
                        </h1>


                        <h1 className='lg:text-6xl uppercase text-2xl  font-medium text-green-400 mb-2' style={{ fontFamily: "Londrina Outline, sans-serif" }}>Go  
                      
                        </h1>



                        <p className='text-white w-6/12 '>Sed convallis sit amet leo quis feugiat. Nunc interdum mollis facilisis. feugi Donec id the urna aliquet, suscipit turpis ut Donec id urna aliquet, suscipit turpis ut, facilisis purus.Sed convallis sit amet leo quis .</p>

                        <Link to={'/allSpot'}> <button className=" btn btn-success  rounded-sm ml-3 bg-[#389c2d] border-none text-gray-100 my-3  ">Explore Now</button></Link>
                    </div>

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[600px] w-full rounded-lg' src={slide2} alt="" />
                <div className="overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                    <div className="animate__animated animate__fadeInRight text-center  flex flex-col items-center h-full w-full absolute top-1/4 ">
                        <p className=" uppercase  font-mont text-white"> Come to experience in Turio</p>
                        <h1 className='lg:text-7xl uppercase text-2xl font-mont font-bold text-green-400 mb-2'>Mekong Delta</h1>
                        <h1 className='lg:text-6xl uppercase text-2xl  font-medium text-green-400 mb-2' style={{ fontFamily: "Londrina Outline, sans-serif" }}>let's
                        
                      </h1>


                        <p className='text-white w-6/12 '>The Mekong Delta is a captivating region in Southeast Asia, where the mighty Mekong River gracefully flows, nourishing lush green landscapes and vibrant communities.</p>

                        <Link to={'/allSpot'}> <button className=" btn btn-success  rounded-sm ml-3 bg-[#389c2d] border-none text-gray-100 my-3  ">Explore Now</button></Link>

                    </div>

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[500px] w-full rounded-lg' src={slide4} alt="" />
                <div className="overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                    <div className=" animate__animated animate__fadeInRight text-center  flex flex-col items-center h-full w-full absolute top-1/4 ">
                        <p className=" uppercase  font-mont text-white   "> Come to experience in Turio</p>
                        <h1 className='lg:text-7xl uppercase text-2xl font-mont font-bold text-green-400 mb-2  '>Saint Martin’s Island</h1>
                        <h1 className='lg:text-6xl uppercase text-2xl  font-medium text-green-400 mb-2' style={{ fontFamily: "Londrina Outline, sans-serif" }}>let's 
                      </h1>


                        <p className='text-white w-6/12 '>
                            Saint Martin's Island in Bangladesh is a pristine natural wonder, where the white sands meet the azure waters of the Bay of Bengal.</p>

                            <Link to={'/allSpot'}> <button className=" btn btn-success  rounded-sm ml-3 bg-[#389c2d] border-none text-gray-100 my-3  ">Explore Now</button></Link>

                    </div>

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[500px] w-full rounded-lg' src={slide3} alt="" />
                <div className="overlay bg-black bg-opacity-40 absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md ">
                    <div className=" animate__animated animate__fadeInRight text-center  flex flex-col items-center h-full w-full absolute top-1/4 ">
                        <p className=" uppercase  font-mont text-white   "> Come to experience in Turio</p>
                        <h1 className='lg:text-7xl uppercase text-2xl font-mont font-bold text-green-400 mb-2  '>Saint Martin’s Island</h1>
                        <h1 className='lg:text-6xl uppercase text-2xl  font-medium text-green-400 mb-2' style={{ fontFamily: "Londrina Outline, sans-serif" }}>let's 
                      </h1>


                        <p className='text-white w-6/12 '>
                            Saint Martin's Island in Bangladesh is a pristine natural wonder, where the white sands meet the azure waters of the Bay of Bengal.</p>

                            <Link to={'/allSpot'}> <button className=" btn btn-success  rounded-sm ml-3 bg-[#389c2d] border-none text-gray-100 my-3  ">Explore Now</button></Link>

                    </div>

                </div>

            </div>
        </SwiperSlide>



        <div className="autoplay-progress w-40 absolute " slot="container-end ">

            <svg viewBox="0 0 48 48" ref={progressCircle}>

            </svg>
            <span ref={progressContent}></span>
        </div>
    </Swiper>
    );
};

export default Banner;