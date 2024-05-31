

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useEffect } from "react";





const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const useAxios = () => {
  const { logOutUser} = useUser()
  const navigate = useNavigate()


  useEffect(() => {

    axiosSecure.interceptors.request.use(function (config) {
      const token= localStorage.getItem('token')
      config.headers.authorization=`bearer ${token}`
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      const status= error.response?.status
      // console.log(status);
      if(status===401|| status===403){
        logOutUser()
        .then(()=>{
          navigate('/signIn')
        })
        
      }
      return Promise.reject(error);
    });
  
  }, [navigate,logOutUser])
  return axiosSecure
};

export default useAxios;