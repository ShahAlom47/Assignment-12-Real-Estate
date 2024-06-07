import { Helmet } from "react-helmet";
import LoadingRing from "../../../SharedComponents/LoadingRing/LoadingRing";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import { ResponsiveTable } from "responsive-table-react";
import Swal from "sweetalert2";


const AdvertiseProperty = () => {
    const axiosSecure = useAxios();
    const { data, isLoading } = useQuery({
        queryKey: ['verifiedProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get('/verifiedProperty');
            return res.data;
        }
    });


    const handelAdvertise= async (item) =>{

       const res = await axiosSecure.post(`/addAdvertise`,item)

       if(res.data?.insertedId){
        Swal.fire('Successfully added property ')
       }

       else if(res.data.message==='Property already exists')
        Swal.fire('Property already exists')

    }



    const columns = [
        {
            "id": "image",
            "text": "Image"
        },
        {
            "id": "title",
            "text": "Title"
        },
    
        {
            "id": "agent",
            "text": "Agent Name"
        },
       
        {
            "id": "price",
            "text": "Price Range"
        },
        {
            "id": "advertise",
            "text": "Advertise"
        },
      
      
       
    ];

    const tableData = data ? data.map(item => ({
        image:  <img className=" w-16 h-16 rounded-full" src={item.property_image} alt="" />,
        title: item.title,
        agent: item.agent_name,
        price: item.price_range,
        advertise:<button onClick={()=>handelAdvertise(item)} className=" btn btn-sm">Advertise</button>

    })) : [];

    return (
        <div className="p-8">
        <Helmet>
           <title>HONEST || Dashboard || Advertise Property</title>
       </Helmet>
       <div className="border-b-2 pb-3">
           <h1 className="text-3xl font-bold">Manage Properties</h1>
       </div>

       {
           isLoading ? <LoadingRing /> :
               <div className='adminProperty my-6'>
                    <ResponsiveTable columns={columns} data={tableData} />
                 <img src="" alt="" />
               </div>
       }
   </div>
    );
};

export default AdvertiseProperty;