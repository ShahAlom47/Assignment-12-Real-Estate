import useAxios from "./useAxios";

const useSingleProperty = () => {
    const axiosSecure=useAxios()

  const getProperty =async(id)=>{
    const res =await axiosSecure.get(`/property/${id}`)
    return res.data
  }
    return [getProperty]
};

export default useSingleProperty;