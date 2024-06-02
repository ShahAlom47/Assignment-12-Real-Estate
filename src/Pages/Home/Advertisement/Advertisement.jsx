import { useQuery } from '@tanstack/react-query';
import  { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBath,  } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { PiBuildingsLight } from 'react-icons/pi';
import useAxiosPublic from '../../../CustomHocks/useAxiosPublic';
import LoadingRing from '../../../SharedComponents/LoadingRing/LoadingRing';
import { Link } from 'react-router-dom';
import { GoStar } from 'react-icons/go';
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
            <div>
                <h1 className=' text-4xl ml-5 font-semibold'>Our choice of <br />
                    popular Property</h1>
            </div>
            <Tooltip id="my-tooltip" className='z-20' />
            <div className=' my-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  '>

                {
                    data ? data.map((card, idx) =><PropertyCard key={card._id} card={card} inx={idx}></PropertyCard>  ) : <LoadingRing></LoadingRing>
                }

            </div>
        </div>
    );
};

export default Advertisement;