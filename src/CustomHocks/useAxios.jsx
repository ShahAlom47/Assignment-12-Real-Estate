

import axios from "axios";
import { useNavigate } from "react-router-dom";



import { useContext, useEffect } from "react";
import useUser from "./useUser";
import { AuthContext } from "../AuthProvider/AuthProvider";






const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const useAxios = () => {
  const { logOutUser} = useContext(AuthContext)
  // const { logOutUser} = useContext(AuthContext)
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
        .then((res)=>{
          navigate('/login')
          console.log(res);
        })
        
      }
      return Promise.reject(error);
    });
  
  }, [navigate,logOutUser])
  return axiosSecure
};

export default useAxios;