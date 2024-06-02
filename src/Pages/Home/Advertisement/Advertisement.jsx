import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../CustomHocks/useAxiosPublic';
import LoadingRing from '../../../SharedComponents/LoadingRing/LoadingRing';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import PropertyCard from '../../../SharedComponents/PropertyCard/PropertyCard';

const Advertisement = () => {
   
    const axiosPublic = useAxiosPublic()
    const { data } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await axiosPublic.get('/property')
            return res.data
        }
    })

   



    return (
        <div className='max-w py-10'>
           <div className=' inline-block p-3 px-5 ml-3 ' style={{boxShadow: '-15px 15px 7px -10px rgb(27, 67, 100)'}}>
                <h1 className=' text-2xl lg:text-4xl ml-5 font-semibold'>Our choice of <br />
                    popular <span className=' font-bold'>Property</span></h1>
            </div>
            <Tooltip id="my-tooltip" className='z-20' />
            <div className=' my-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  '>

                {
                    data ? data.map((card, idx) =><PropertyCard key={card._id} card={card} inx={idx}></PropertyCard>  ) : <LoadingRing></LoadingRing>
                }

            </div>
            <div className=' flex justify-center'>
            <Link to={'/allProperty'}><button className=' my-4 btn bg-yellow-600 rounded-sm border-none'>View All Property</button></Link>
        </div>
        </div>
    );
};

export default Advertisement;