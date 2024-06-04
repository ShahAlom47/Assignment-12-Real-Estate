import { useForm } from "react-hook-form";
import useUser from "../../../CustomHocks/useUser";
import usePhotoHost from "../../../CustomHocks/usePhotoHost";


const AddProperty = () => {

    const { user } = useUser()
    const [handelHost]=usePhotoHost();
  
    const { register, handleSubmit, formState: { errors } } = useForm();
  

    const onSubmit = async(data) => {
        const imageFile ={image: data.property_image[0]}
       const res=await handelHost(imageFile)
       console.log(res);

      

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
                            <input  {...register("price_range", { required: true })} type="number" placeholder="Price : $400 - $600 " className={` outline-none w-full `} />
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