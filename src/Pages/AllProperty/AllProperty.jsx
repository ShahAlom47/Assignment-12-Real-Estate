import { useQuery } from "@tanstack/react-query";
import useAxios from "../../CustomHocks/useAxios";


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
        <div>
            all property
            
        </div>
    );
};

export default AllProperty;