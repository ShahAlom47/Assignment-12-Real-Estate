import { useForm } from "react-hook-form";
import useUser from "../../../CustomHocks/useUser";
import usePhotoHost from "../../../CustomHocks/usePhotoHost";
import useAxios from "../../../CustomHocks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddProperty = () => {

    const { user } = useUser()
    const [handelHost] = usePhotoHost();
    const axiosSecure= useAxios()
    const navigate = useNavigate()

    const { register, handleSubmit,reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        const imageFile = { image: data.property_image[0] }
        const res = await handelHost(imageFile)

        if (res.success) {
            const propertyData = {
                title:data.title ,
                description:data.description ,
                price_range:data.price_range ,
                agent_name:user.displayName ,
                agent_photo:user.photoURL ,
                agent_email:user.email ,
                property_image:res.data.display_url ,
                property_location:data.property_location ,
                verification_status:'pending' ,
                property_type:data.property_type ,
                bedrooms:data.bedrooms ,
                bathrooms:data.bathrooms ,
                square_feet:data.square_feet ,
                year_built:data.year_built ,
            }

            const response = await axiosSecure.post('/addProperty',propertyData)
            if(response.data.insertedId){
                reset();
                Swal.fire({
                    title: "Added property successfully",
                   
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "My Added Property"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    navigate('/dashBoard/myAddedProperty')
                    }
                  });
                
            }


            console.log(propertyData);
        }
// console.log(res);

    }

    return (
        <div className="p-8 ">
            <div className=" border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Add Property</h1>
            </div>
            <div className=" my-4">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">


                    <div className="flex gap-3">

                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("title", { required: true })} type="text" placeholder="Title" className={` outline-none w-full `} />
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("property_location", { required: true })} type="text" placeholder="location" className={` outline-none w-full `} />
                        </label>

                    </div>
                    <div className="flex gap-3">

                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("property_type", { required: true })} type="text" placeholder="Property type" className={` outline-none w-full `} />
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("price_range", { required: true })} type="text" placeholder="Price : $400 - $600 " className={` outline-none w-full `} />
                        </label>

                    </div>

                    <div className="flex gap-3">

                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("bathrooms", { required: true })} type="number" placeholder="Bathrooms" className={` outline-none w-full `} />
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("bedrooms", { required: true })} type="number" placeholder="Bathrooms " className={` outline-none w-full `} />
                        </label>

                    </div>
                    <div className="flex gap-3">

                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("square_feet", { required: true })} type="number" placeholder="Size" className={` outline-none w-full `} />
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <input  {...register("year_built", { required: true })} type="number" placeholder="Year built " className={` outline-none w-full `} />
                        </label>

                    </div>
                    <div className="flex gap-3">

                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <h1><span className=" font-semibold">Agent Name:</span> {user.displayName}</h1>
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                            <h1><span className=" font-semibold">Agent Email:</span> {user.email}</h1>
                        </label>


                    </div>

                    <label className={`input input-bordered flex items-center   gap-2 w-full  `}>

                        <input  {...register("property_image", { required: true })} type="file" className="" />
                    </label>

                    <textarea {...register("description", { required: true })} placeholder="Description" rows={5} className="input input-bordered flex items-center   gap-2 w-full h-20" ></textarea>





                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className=" my-5 btn btn-neutral w-full" type="submit" value={'Add Property'} />
                </form>



            </div >
        </div >

    );
};

export default AddProperty;