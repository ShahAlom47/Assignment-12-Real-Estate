import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../CustomHocks/useAxios";
import LoadingRing from "../../../SharedComponents/LoadingRing/LoadingRing";
import { ResponsiveTable } from "responsive-table-react";
import Swal from "sweetalert2";

const ManageUser = () => {
    const axiosSecure = useAxios();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['manageUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUser/admin');
            return res.data;
        }
    });

    console.log(data);

    const handelUserRole = async (id, role) => {

        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make this user ${role}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/user/admin/role/${id}`, { role })
                console.log(res.data);
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Changed",
                        text: "User role updated success",
                        icon: "success"
                    });
                }
            }
        });


    }

    const handelDelate = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: " Delete!"
        }).then(async (result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                });

            }
        });

        console.log(id);
    }

    const columns = [
        {
            "id": "name",
            "text": "Name"
        },
        {
            "id": "email",
            "text": "Email"
        },
        {
            "id": "userRole",
            "text": "User Role"
        },
        {
            "id": "makeAgent",
            "text": "Make Agent "
        },
        {
            "id": "makeAdmin",
            "text": "Make Admin"
        },
        {
            "id": "makeUser",
            "text": "Make User"
        },

        {
            "id": "deleteUser",
            "text": "Delete User"
        },



    ];

    const tableData = data ? data.map(user => ({
        name: user.name,
        email: user.email,
        userRole: <h1 className="font-semibold uppercase">{user.role}</h1>,
        makeAgent: <button onClick={() => { handelUserRole(user._id, 'agent') }} className="btn btn-sm">Make Agent</button>,
        makeAdmin: <button onClick={() => { handelUserRole(user._id, 'admin') }} className="btn btn-sm">Make Admin </button>,
        makeUser: <button onClick={() => { handelUserRole(user._id, 'user') }} className="btn btn-sm">Make  User</button>,
        deleteUser: <button onClick={() => { handelDelate(user._id) }} className="btn btn-sm bg-red-400 ">Delete </button>,
    })) : [];

    return (
        <div className="p-8">
            <div className="border-b-2 pb-3">
                <h1 className="text-3xl font-bold">Manage User</h1>
            </div>

            {
                isLoading ? <LoadingRing /> :
                    <div className='adminProperty my-6'>
                        <ResponsiveTable columns={columns} data={tableData} />
                    </div>
            }
        </div>
    );
};

export default ManageUser;