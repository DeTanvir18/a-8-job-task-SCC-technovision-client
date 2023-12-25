import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { FaTasks } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const AddTask = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();


    const onSubmit = async (data) => {
        const newTask = {
            title: data.title,
            email: user?.email,
            description: data.description,
            status: "to-do",
            deadline: data.date,
            priority: data.priority,
        }
        const newTaskRes = await axiosPublic.post('/tasks', newTask);
        if (newTaskRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.title} is added to the tasks.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <div className="bg-slate-400 min-h-screen mb-16">
            <Helmet>
                <title>Dashboard | New Task</title>
            </Helmet>
            <div className="py-4 px-6 rounded-lg">
                <SectionTitle heading="Add New Task?" ></SectionTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center items-center lg:w-1/3 w-full md:w-2/3 mx-auto gap-2">
                        {/* Title */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                {...register('title', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Priority */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select defaultValue="default" {...register('priority', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Choose Your Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Deadline */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Deadline"
                                {...register('date', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Task Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Type Your Task Description here"></textarea>
                        </div>
                    </div>
                    <div className="text-center mt-2 mb-12 text-white">
                        <button className="btn btn-ghost w-full md:w-1/3 lg:1/4">
                            <FaTasks className="ml-4"></FaTasks> Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;