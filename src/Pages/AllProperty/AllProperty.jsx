import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHocks/useAxios";
import PropertyCard from "../../SharedComponents/PropertyCard/PropertyCard";
import { Link } from "react-router-dom";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";


const AllProperty = () => {
const axiosSecure= useAxios();

const {data}=useQuery({
    queryKey:['allProperty'],
    queryFn:async()=>{
        const res= await axiosSecure.get('/allProperty')
        return res.data;
    }
})

console.log(data)
    return (
        <div className='max-w py-10'>
        <div className="mb-5 ">
            <h1 className=' p-4 py-2 shadow-blue-600 shadow-md border-b-2 border-l-2 inline  text-4xl   ml-5 font-semibold'>Our Property</h1>
        </div>
      
        <div className=' my-5 mt-10 grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  '>

            {
                data ? data.map((card, idx) =><PropertyCard key={card._id} card={card} inx={idx}></PropertyCard>  ) : <LoadingRing></LoadingRing>
            }

        </div>
      
    </div>
    );
};

export default AllProperty;