import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../CustomHocks/useAxios";
import PropertyCard from "../../SharedComponents/PropertyCard/PropertyCard";
import LoadingRing from "../../SharedComponents/LoadingRing/LoadingRing";
import { Helmet } from "react-helmet";


const ViewMyProperty = () => {
    const { email } = useParams();

    const axiosSecure = useAxios()

    const { data, isLoading } = useQuery({
        queryKey: ['viewMyProperty'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myAddedProperty/${email}`)

            return res.data
        }
    })

    console.log(data);

    return (
        <div className=" max-w">

            <Helmet>
                <title>HONEST || Agent Property</title>
            </Helmet>
            <div className="mb-5 ">
                <h1 className=' p-4 py-2 shadow-md border-b-2 border-l-2 inline  text-4xl  my-6 ml-5 font-semibold'>Agent Property</h1>
            </div>
            {
                isLoading ? <LoadingRing></LoadingRing> :
                <div className=' my-10 mt-10 grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  '>

                {
                    data ? data.map((card, idx) => <PropertyCard key={card._id} card={card} inx={idx}></PropertyCard>) : <LoadingRing></LoadingRing>
                }

            </div>
            }

        </div>
    );
};

export default ViewMyProperty;