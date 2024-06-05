import { useLocation, useParams } from "react-router-dom";
import useSingleProperty from "../../../../CustomHocks/useSingleProperty";
import LoadingRing from "../../../../SharedComponents/LoadingRing/LoadingRing";

const EditForm = () => {
    const location = useLocation()
    const { id } = useParams()
    const { data,  isLoading } = useSingleProperty(id);

  


    console.log(data);
    if(isLoading){
        return <LoadingRing></LoadingRing>
    }
    return (

        <div className="p-8">
            <div className=" border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Edit Property</h1>
            </div>
            <div>


            </div>
        </div>
    );
};

export default EditForm;