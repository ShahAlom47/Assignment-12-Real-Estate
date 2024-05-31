import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBath, FaLocationArrow } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { PiBuildingsLight } from 'react-icons/pi';
import useAxiosPublic from '../../../CustomHocks/useAxiosPublic';

const Advertisement = () => {
    const axiosPublic=useAxiosPublic()
const {data}=useQuery({
    queryKey:['property'],
    queryFn: async()=>{
        const res= await axiosPublic.get('/property')
        return res.data
    }
})


console.log(data);


    return (
        <div className='max-w py-10'>
            <div>
                <h1 className=' text-4xl ml-5 font-bold'>Our choice of <br />
                    popular Property</h1>
            </div>

            <div className=' my-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-md">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center'>
                        <CiLocationOn />
                        <p className="font-semibold">Countryside, OR</p>
                        </div>
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="divider"></div> 
                        <div className="card-actions justify-between">
                          <div>
                            <p className='text2xl font-bold'>12000$</p>
                          </div>
                          <div>
                            <div className='flex items-center'><PiBuildingsLight /> 1888 sft</div>
                            <div className='flex items-center'><IoBedOutline /> 5</div>
                            <div className='flex items-center'><FaBath /> 3</div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;