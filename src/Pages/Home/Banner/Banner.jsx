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
                <div className="overlay absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[600px] w-full rounded-lg' src={slide2} alt="" />
                <div className="overlay absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                    

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[600px] w-full rounded-lg' src={slide4} alt="" />
                <div className="overlay absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                

                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img className='h-[600px] w-full rounded-lg' src={slide3} alt="" />
                <div className="overlay absolute bottom-1 md:bottom-0 lg:bottom-0 left-0 z-40 lg:p-0 p-0 w-full h-full rounded-md" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))" }}>
                  

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