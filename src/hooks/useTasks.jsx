import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTasks = () => {
    const axiosPublic = useAxiosPublic();
    
    // tan stack query
    const { refetch, data: tasks = [] } = useQuery({ 
        queryFn: async () => {
            const res = await axiosPublic.get('/tasks');
            return res.data;
        }
    })

    return [refetch, tasks];
};

export default useTasks;