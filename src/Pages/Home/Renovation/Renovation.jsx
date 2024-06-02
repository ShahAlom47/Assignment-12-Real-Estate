import { CgIfDesign } from "react-icons/cg";
import { MdOutlineHomeWork } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";


const Renovation = () => {
    return (
        <div className=" max-w grid gap-12 lg:grid-cols-2 md:grid-cols-2 py-16">
            <div className="p-10 space-y-8">
                <div className=' inline-block p-3   mb-10'>
                    <h1 className=' text-3xl lg:text-4xl  font-semibold'>Our expert will help you<br />
                        make <span className=' font-bold'>the renovation</span></h1>
                </div>

                <div className=" flex ">
                    <div className=" text-4xl mx-4">
                        <MdOutlineHomeWork />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Find inspiration</h1>
                        <p>Explore a world of design ideas and innovative solutions to spark your creativity. Our curated galleries and expert tips will help you discover the perfect style for your home renovation.</p>
                    </div>
                </div>
                <div className=" flex">
                    <div className=" text-4xl mx-4">
                        <CgIfDesign />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Find architect/designer</h1>
                        <p>Connect with top architects and designers to bring your vision to life. Our network of experienced professionals will help you create functional and beautiful spaces tailored to your unique needs and preferences</p>
                    </div>
                </div>
                <div className=" flex">
                    <div className=" text-4xl mx-4">
                        <TfiPaintRoller />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Begin renovation</h1>
                        <p>Start your renovation journey with confidence. Our expert team will guide you through the planning and execution stages, ensuring a smooth process and exceptional results for your home transformation.</p>
                    </div>
                </div>

            </div>

           <div className="my-16 flex items-center p-8">
           <div className=" grid gap-3 grid-cols-2 min-h-[200px] ">
                <div className="h-full  py-5">
                    <img className="h-full" src="https://i.ibb.co/dMqQVpT/card2.png" alt="" />
                </div>
               <div>
               <div className="h-1/2 mb-3 ">
                    <img className="h-full" src="https://i.ibb.co/dMqQVpT/card2.png" alt="" />
                </div>
                <div className="h-1/2  ">
                    <img className=" h-full" src="https://i.ibb.co/dMqQVpT/card2.png" alt="" />
                </div>
               </div>

            </div>
           </div>


        </div>
    );
};

export default Renovation;