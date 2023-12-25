import { Navigate, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { BiBookAdd } from "react-icons/bi";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const { _id, title, priority, status, deadline, description } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const task = {
            title: data.title,
            priority: data.priority,
            status: data.status,
            deadline: data.deadline,
            description: data.description,
        }
       // now send the task data to the server with the image url
        const taskRes = await axiosPublic.patch(`/tasks/update/${_id}`, task);
        if (taskRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${title} is Updated Successfully.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        reset();
        Navigate('/dashboard');
    }





    return (
        <div className="bg-blue-200 min-h-screen mb-16">
            <Helmet>
                <title>Dash | Update Task</title>
            </Helmet>
            <div className="py-4 px-6 rounded-lg">
                <SectionTitle heading="Update Your Task?" ></SectionTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center items-center lg:w-1/3 w-full md:w-2/3 mx-auto gap-2">
                        {/* Title */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                defaultValue={title}
                                {...register('title', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Priority */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select defaultValue={priority} {...register('priority', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Choose Your Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        {/* Status */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                defaultValue={status}
                                {...register('status', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* Deadline */}
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Deadline"
                                defaultValue={deadline}
                                {...register('date', { required: true })}
                                required
                                className="input input-bordered w-full" />
                        </div>
                        {/* description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Task Description</span>
                            </label>
                            <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Type Your Task Description here" defaultValue={description}></textarea>
                        </div>
                    </div>
                    <div className="text-center mt-2 mb-12 text-white">
                        <button className="btn btn-primary w-full md:w-1/3 lg:1/4">
                            <BiBookAdd className="ml-4"></BiBookAdd> Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;