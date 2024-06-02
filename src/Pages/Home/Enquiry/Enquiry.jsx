import { useForm } from "react-hook-form"
import useUser from "../../../CustomHocks/useUser";
import useAxiosPublic from "../../../CustomHocks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {

    const { user } = useUser();
    const axiosPublic = useAxiosPublic();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {


        const enquiryData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            userEmail: user?.email,
        }

        const  res=await axiosPublic.post('/addEnquiry',enquiryData)
        if(res?.data?.insertedId){
          toast.success('Submitted successfully')
            reset();
        }

        console.log(res.data)

    }

    return (
        <div className="p-10 bg-[url('https://i.ibb.co/p0qz08f/marvin-meyer-cjhu-XRt-RT0-Y-unsplash-1.jpg')] min-h-[500px]">
 <ToastContainer />

            <div className="max-w grid lg:grid-cols-2 md:grid-cols-2">
                <div className="text-white w-10/12 m-auto">
                    <h1 className=" text-4xl font-bold lg:text-7xl my-4">Discover a new <br /> way of living</h1>
                    <p className="">Experience a refreshing lifestyle with our latest innovation. Embrace modernity and comfort for a fulfilling living experience</p>
                </div>
                <div className="">
                    <div className=" w-10/12 m-auto bg-[rgba(215,213,213,0.6)] backdrop-blur-md border border-gray-200 rounded-md p-8">

                        <div className="mb-6">
                            <h1 className="text-2xl font-bold">Make an enquiry</h1>
                            <p className="w-10/12">Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-5">
                            <input type="text" placeholder="Name*" {...register("name", { required: true })} className="input input-bordered bg-white rounded-sm border-none outline-none w-full " />
                            {errors.name && <span className="text-red-700">This field is required</span>}
                            <input type="email" placeholder="Email*" {...register("email", { required: true })} className="input input-bordered bg-white rounded-sm border-none outline-none w-full " />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                            <input type="number" placeholder="Your Phone Number*" {...register("phone", { required: true })} className="input input-bordered bg-white rounded-sm border-none outline-none w-full " />
                            {errors.phone && <span className="text-red-700">This field is required</span>}

                            <input className=' my-4 btn bg-yellow-600 hover:bg-yellow-500 rounded-sm border-none' type="submit" value={'Make an enquiry'} />
                        </form>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Enquiry;