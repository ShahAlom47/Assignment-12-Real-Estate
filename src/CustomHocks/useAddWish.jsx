
import useAxios from "./useAxios";
import useUser from "./useUser";


const useAddWish = () => {
    const axiosSecure=useAxios()
    const {user}=useUser();


    const addWishList=async(data)=>{
        const { _id, ...restData } = data;
        const wishData = { ...restData, property_id: _id, userEmail: user.email };

       const res=await axiosSecure.post('/addWishList',wishData) 

       return res.data
    // console.log(wishData);
  


    }
    return [addWishList]
};

export default useAddWish;