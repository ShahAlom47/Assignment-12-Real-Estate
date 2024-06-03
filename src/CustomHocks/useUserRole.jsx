import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";


const useUserRole = () => {
    const axiosSecure=useAxios()
    const {user}=useUser()

    console.log(user);

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ['userRoles', user?.email],
        queryFn: async () => {
            if (!user || !user.email) {
                throw new Error('User is not logged in or user email is missing');
            }
            if(user){
                const res = await axiosSecure.get(`/user/role/${user.email}`);
            return res?.data?.userRole || 'user'; 
            }
        },
        enabled: !!user?.email,
    });

    return { data, error, isLoading, refetch };
};

export default useUserRole;