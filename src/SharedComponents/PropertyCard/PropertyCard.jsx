
import  { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBath,  } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { PiBuildingsLight } from 'react-icons/pi';

import { Link } from 'react-router-dom';
import { GoStar } from 'react-icons/go';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import PropTypes from 'prop-types'
import useAddWish from '../../CustomHocks/useAddWish';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const PropertyCard = ({card,idx}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [addWishList]=useAddWish()

    const handelWishList=async(card)=>{
      const res =await addWishList(card)
      console.log(res)
      if(res.insertedId){
        toast.success('Successfully added to wishlist')
      
      }
      else if(res.message==='Wishlist item already exists'  ){
        toast.info('This property already exists your List')}
    }

    function handleMouseOver(index) {
        setHoveredIndex(index);
    }

    function handleMouseOut() {
        setHoveredIndex(null);
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Tooltip id="my-tooltip" className='z-20' />
             <div key={card._id} className={` min-h-[500px] card card-compact bg-base-100 shadow-xl rounded-md `}
                        onMouseOver={() => handleMouseOver(idx)}
                        onMouseOut={handleMouseOut}
                    >
                        {/* ${idx % 4 === 0 || idx % 4 === 3 ? 'col-span-4 ' : 'col-span-2 '} */}
                        <figure className='relative  '>
                            <img
                                className='min-h-[250px]'
                                style={{ transition: 'transform 0.9s ease', transform: hoveredIndex === idx ? 'scale(1.10)' : 'scale(1)' }}
                                src={card.property_image} alt="Shoes" />
                            <div
                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(-125%)' : 'translateY(-0%)' }}
                                className="z-10 flex-1 absolute flex flex-row-reverse items-center -bottom-10 left-3 ">
                                <Link ><p className=' z-0 -ml-1 bg-white bg-opacity-50 backdrop-filter backdrop-blur-md  px-2 rounded-r-sm font-semibold hover:text-red-700 text-black'>{card.agent_name}</p></Link>
                                <img className='z-10 h-10 w-10 rounded-full border-2 ' src={card.agent_photo} alt="" />
                            </div>
                            <div
                                style={{ transition: 'transform 0.4s ease', transform: hoveredIndex === idx ? 'translateY(165%)' : 'translateY(-12%)' }}
                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-l-sm   p-1 pl-3  pr-8 text-lg z-10 absolute flex  items-center -top-5 right-0 ">
                                <Link ><p
                                onClick={()=>handelWishList(card)}
                                    data-tooltip-id="my-tooltip" data-tooltip-content="add to wishlist"
                                    className=' z-0 -ml-1   font-semibold hover:text-red-700 text-black'><GoStar /></p></Link>

                            </div>
                            <div
                                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-md rounded-r-sm   p-1 pr-3  pl-8  z-10 absolute flex  items-center top-5 left-0 ">
                                <Link ><p
                                    className=' z-0 -ml-1   font-semibold hover:text-red-700 text-black'>{card.verification_status}</p></Link>

                            </div>
                        </figure>
                        <div className="card-body">
                            <div className='flex items-center'>
                                <CiLocationOn />
                                <p className="font-semibold">{card.property_location}</p>
                            </div>
                            <Link to={`/details/${card._id}`}>
                                <h2
                                 data-tooltip-id="my-tooltip" data-tooltip-content="Details"
                                className="card-title title-t ">{card.title}</h2></Link>
                            <p>{card.description}</p>
                            <div className="divider my-2"></div>
                            <div className="card-actions justify-between">
                                <div>
                                    <p className='text2xl font-bold'>${card.min_price}-${card.max_price}</p>
                                </div>
                                <div className=' flex items-center gap-4 mb-3'>
                                    <div className='flex items-center gap-2'><PiBuildingsLight /> {card.square_feet}</div>
                                    <div className='flex items-center gap-2'><IoBedOutline /> {card.bedrooms}</div>
                                    <div className='flex items-center gap-2'><FaBath />{card.bathrooms}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
        </div>
    );
};

export default PropertyCard;

PropertyCard.propTypes = {
    card: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired,

  };