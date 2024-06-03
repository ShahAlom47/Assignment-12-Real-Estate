import { useNavigate, useParams } from "react-router-dom";
import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import useUser from "../../../CustomHocks/useUser";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";




const MakeOffer = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [price, setPrice] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate =useNavigate()
    
    const { id } = useParams();
    const { user } = useUser()
    const axiosSecure = useAxios()
    const { data } = useQuery({
        queryKey: ['makeOffer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/property/${id}`)
            return res.data
        }
    })


    const price_range = data.price_range
    const cleanPriceRange = price_range.replace(/\$/g, '');
    const [minPrices, maxPrices] = cleanPriceRange.split('-');
    const minPrice = parseInt(minPrices.trim().replace(/,/g, ''));
    const maxPrice = parseInt(maxPrices.trim().replace(/,/g, ''));


    const handlePriceChange = (e) => {
        const inputPrice = e.target.value;
        console.log(inputPrice,isValid);
        setPrice(inputPrice);

        const cleanedPrice = parseInt(inputPrice.replace(/[^0-9]/g, ''), 10);

        if (cleanedPrice >= minPrice && cleanedPrice <= maxPrice) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handelFrom = async(e) => {
        e.preventDefault()
        // const price = e.target.price.value
       
        const offerData = {
            price,
            date: startDate,
            property_title:data.title,
            property_id:data.property_id,
            property_location:data.property_location,
            agent_name:data.agent_name,
            buyer_email:user.email,
            buyer_name:user.name,
            verification_status:'pending'
            

        }

        if (price < minPrice || price > maxPrice) {
            Swal.fire(`The price must be between $${minPrice.toLocaleString()} and $${maxPrice.toLocaleString()}.`);
            return
        } else {
           
            const res= await axiosSecure.post('/addOffer',offerData)
            if(res.data.insertedId){
                e.target.reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your offer successfully Submitted ",
                    showConfirmButton: true,
                    timer: 1500
                  });

                  setTimeout(() => {
                    navigate('/dashBoard/userWishList')
                  }, 1500);
            }
            console.log(res.data);

        }


       


    }



    return (
        <div className="p-8">
            <div className=" border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Submit your offer</h1>
            </div>

            <div className=" flex ">
                <form onSubmit={handelFrom} className=" w-full my-5 flex gap-3 flex-col">

                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <span className="font-medium">Property:</span> {data?.title}
                    </label>

                    <div className="flex gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <span className="font-medium">Location: </span> {data?.property_location}
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <span className="font-medium">Agent: </span> {data?.agent_name}
                        </label>
                    </div>
                    <div className="flex gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <span className="font-medium">Your Email: </span> {user?.email}
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <span className="font-medium">Your Name: </span> {user?.displayName}
                        </label>
                    </div>

                    <div className="flex gap-3">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </label>
                        <label className={`input input-bordered flex items-center   gap-2 w-full  `}>
                         
                         {
                            isValid?'':<p className="text-red-500 text-3xl font-bold">!</p>
                         }
                           
                            <input
                            className={` outline-none w-full `}
                             type="number" 
                             name="price" 
                             onChange={handlePriceChange}
                           
                              placeholder="Amount" />
                            
                        </label>
                    </div>



                    <input className="input input-bordered w-full font-bold btn hover:text-black  bg-green-700 text-white text-center" type="submit" value="Submit Offer" />

                </form>


            </div>
        </div>
    );
};

export default MakeOffer;