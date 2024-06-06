
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import LoadingRing from "../../../SharedComponents/LoadingRing/LoadingRing";
import { ResponsiveTable } from "responsive-table-react";

import { MdOutlineCancel } from 'react-icons/md';
import { FcAcceptDatabase } from 'react-icons/fc';
import './ManageProperties.css'

const ManageProperties = () => {
    const axiosSecure = useAxios();
    const { data, isLoading } = useQuery({
        queryKey: ['allPropertyAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allProperty');
            return res.data;
        }
    });

    console.log(data);

    const handleAccept=(id)=>{


    }
    const handleReject=(id)=>{


    }

    const columns = [
        {
            "id": "title",
            "text": "Title"
        },
        {
            "id": "location",
            "text": "Location"
        },
        {
            "id": "agent",
            "text": "Agent Name"
        },
        {
            "id": "agentEmail",
            "text": "Agent Email"
        },
        {
            "id": "price",
            "text": "Price Range"
        },
        {
            "id": "accept",
            "text": "Accept"
        },
        {
            "id": "reject",
            "text": "Reject"
        }
    ];

    const tableData = data ? data.map(item => ({
        title: item.title,
        location: item.property_location,
        agent: item.agent_name,
        agentEmail: item.agent_email,
        price: item.price_range,
        accept: <button className='text-2xl ' onClick={() => handleAccept(item._id)}><FcAcceptDatabase /></button>,
        reject: <button className='text-2xl text-red-500 ' onClick={() => handleReject(item._id)}><MdOutlineCancel className=' mx-auto' /></button>
    })) : [];

    return (
        <div className="p-8">
            <div className="border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Manage Properties</h1>
            </div>

            {
                isLoading ? <LoadingRing /> :
                <div className='adminProperty'>
                    <ResponsiveTable columns={columns} data={tableData} />
                </div>
            }
        </div>
    );
};

export default ManageProperties;
