
import useAxios from "./useAxios";
import useUser from "./useUser";


const useAddWish = () => {
    const axiosSecure=useAxios()
    const {user}=useUser();


    const addWishList=async(data)=>{
        const wishData={...data,userEmail:user.email}

       const res=await axiosSecure.post('/addWishList',wishData) 

       return res.data
  


    }
    return [addWishList]
};

export default useAddWish;