import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useSingleProperty = (id) => {
  const axiosSecure = useAxios();

  const { data, error, isLoading } = useQuery({
    queryKey: ['editProperty', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/property/${id}`);
      return res.data;
    },
    enabled: !!id, 
  });

  return { data, error, isLoading };
};

export default useSingleProperty;