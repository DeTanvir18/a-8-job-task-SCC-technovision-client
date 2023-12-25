import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://a8-job-task-scc-technovision-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;