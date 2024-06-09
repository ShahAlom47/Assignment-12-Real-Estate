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
                    <img className='lg:h-[600px] gradient-overlay w-full rounded-lg' src={slide1} alt="" />
                    <div className="flex items-center  overlay text-white absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                        <div className=' inline-block m-[10%] p-3'>
                            <h4 className=' font-bold text-xl'>FIND YOUR</h4>
                            <h1 className=' font-bold  lg:text-7xl md:text-6xl text-5xl'>DREAM <br /> HOUSE</h1>
                            <Link to={'/allProperty'}><button className=' btn btn-sm rounded-sm px-5 border-none my-3 text-xl bg-[#f29735]'>Explore</button></Link>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='lg:h-[600px] w-full rounded-lg' src={slide2} alt="" />
                    <div className="flex items-center  overlay text-white absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                        <div className=' inline-block m-[10%] p-3'>
                            <h4 className='font-bold text-xl'>FIND THE</h4>
                            <h1 className=' font-bold  lg:text-7xl md:text-6xl text-5xl'>DREAM <br /> HOUSE</h1>
                            <Link to={'/allProperty'}><button className=' btn btn-sm rounded-sm px-5 border-none my-3 text-xl bg-[#f29735]'>Explore</button></Link>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='lg:h-[600px] w-full rounded-lg' src={slide4} alt="" />
                    <div className="flex items-center  overlay text-white absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                        <div className=' inline-block m-[10%] p-3'>
                            <h4 className='font-bold text-xl'>DISCOVER YOUR</h4>
                            <h1 className=' font-bold  lg:text-7xl md:text-6xl text-5xl'>DREAM <br /> HOUSE</h1>
                            <Link to={'/allProperty'}><button className=' btn btn-sm rounded-sm px-5 border-none my-3 text-xl bg-[#f29735]'>Explore</button></Link>
                        </div>
                    </div>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='lg:h-[600px] w-full rounded-lg' src={slide3} alt="" />
                    <div className="flex items-center  overlay text-white absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                        <div className=' inline-block m-[10%] p-3'>
                            <h4 className='font-bold text-xl'>EXPLORE YOUR</h4>
                            <h1 className=' font-bold  lg:text-7xl md:text-6xl text-5xl'>DREAM <br /> HOUSE</h1>
                            <Link to={'/allProperty'}><button className=' btn btn-sm rounded-sm px-5 border-none my-3 text-xl bg-[#f29735]'>Explore</button></Link>
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