import { GiCarKey } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdOutlineHomeWork } from "react-icons/md";

const PerfectHome = () => {
    return (
        <div className=" bg-[#858f8272]">
            <div className=" max-w">

                <div className="w-11/12 m-auto py-20">

                    <div className=' inline-block p-3   mb-10'>
                        <h1 className=' text-3xl lg:text-4xl  font-semibold'>How It works?<br />
                            Find a <span className=' font-bold'>perfect home</span></h1>
                    </div>
                    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
                        <div className="border-r-2 pr-3 mr-3 border-black"> 
                            <h1 className="text-5xl font-light my-3"><MdOutlineHomeWork /></h1>
                            <h1 className=" text-3xl font-semibold my-3">Find real estate</h1>
                            <p className="">Embark on your real estate journey with us. Browse through our extensive listings to find your perfect property and start turning your dreams into reality today</p>
                        </div>
                        
                        <div className="border-r-2 pr-3 mr-3 border-black"> 
                            <h1 className="text-5xl font-light my-3"><HiOutlineHomeModern /></h1>
                            <h1 className=" text-3xl font-semibold my-3">Meet relator</h1>
                            <p className="">Meet Our Experienced Realtors for Personalized Guidance. Our Team is Dedicated to Helping You Find the Perfect Property, Ensuring a Seamless Experience Every Step of the Way.</p>
                        </div>
                        <div className="border-r-2 pr-3 mr-3 border-black"> 
                            <h1 className="text-5xl font-light my-3"><GrDocumentText /></h1>
                            <h1 className=" text-3xl font-semibold my-3">Documents </h1>
                            <p className="">Easily access all the necessary documents related to your property. From legal paperwork to essential records, our platform streamlines the process, ensuring convenience and peace of mind for every homeowner.</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-light my-3"><GiCarKey /></h1>
                            <h1 className=" text-3xl font-semibold my-3">Take the keys</h1>
                            <p className="">Take the keys to your new home with confidence. Our seamless process ensures you receive all the necessary information and support, making the final step of your real estate journey smooth and hassle-free</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default PerfectHome;