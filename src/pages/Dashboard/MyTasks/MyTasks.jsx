import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskCard from "../TaskCard/TaskCard";
import useTasks from "../../../hooks/useTasks";


const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const [refetch, tasks] = useTasks();
    const axiosPublic = useAxiosPublic();
    const myTasks = tasks.filter(task => task?.email === user?.email);
    const toDo = myTasks.filter(task => task?.status === "to-do");
    const ongoing = myTasks.filter(task => task?.status === "ongoing");
    const completed = myTasks.filter(task => task?.status === "completed");



    const handleDeleteTask = (task) => {
        Swal.fire({
            title: `Are you sure to delete ${task.title}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${task._id}`);
                refetch();
                if (res.data.deletedCount > 0) {
                    toast(`${task.title} Task successfully Deleted!`);
                }
            }
        });
    }

    return (
        <div className="w-full lg:w-2/3 mx-auto">
            <SectionTitle heading="Tasks"></SectionTitle>
            <hr />
            <hr />
            <div className="w-auto md:w-full rounded-lg ms-2 mb-20">
                <Helmet>
                    <title>Dash | Tasks</title>
                </Helmet>

                {
                    toDo.length ?
                        <div>
                            <h3 className="text-xl mb-2 text-center">To-Do</h3>
                            <div className="overflow-x-auto mb-28">
                                <table className="table border-4">
                                    {/* head */}
                                    <thead className="font-bold text-black border-b-4 bg-pink-200">
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Deadline</th>
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                        {
                                            toDo.map((task, index) => <TaskCard
                                                key={task._id}
                                                index={index}
                                                task={task}
                                                handleDeleteTask={handleDeleteTask}
                                            ></TaskCard>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className="flex w-full flex-col justify-center items-center">
                            <p className="mt-16 mb-2 text-center text-2xl font-bold mx-auto">You have no To-Do Task to Display.</p>
                            <div className="flex justify-center items-center pb-10">
                                <BallTriangle
                                    height={100}
                                    width={100}
                                    radius={5}
                                    color="#149ce0"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />
                            </div>
                        </div>
                }
                {
                    ongoing.length ?
                        <div>
                            <hr />
                            <hr />
                            <h3 className="text-xl mb-2 text-center">Ongoing</h3>
                            <div className="overflow-x-auto mb-28">
                                <table className="table border-4">
                                    {/* head */}
                                    <thead className="font-bold text-black border-b-4 bg-pink-200">
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Deadline</th>
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                        {
                                            ongoing.map((task, index) => <TaskCard
                                                key={task._id}
                                                index={index}
                                                task={task}
                                                handleDeleteTask={handleDeleteTask}
                                            ></TaskCard>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className="flex w-full flex-col justify-center items-center">
                            <p className="mt-16 mb-2 text-center text-2xl font-bold mx-auto">You have no Ongoing Task to Display.</p>
                            <div className="flex justify-center items-center pb-10">
                                <BallTriangle
                                    height={100}
                                    width={100}
                                    radius={5}
                                    color="#149ce0"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />
                            </div>
                        </div>
                }
                {
                    completed.length ?
                        <div>
                            <hr />
                            <hr />
                            <h3 className="text-xl mb-2 text-center">Completed</h3>
                            <div className="overflow-x-auto mb-28">
                                <table className="table border-4">
                                    {/* head */}
                                    <thead className="font-bold text-black border-b-4 bg-pink-200">
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Deadline</th>
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                        {
                                            completed.map((task, index) => <TaskCard
                                                key={task._id}
                                                index={index}
                                                task={task}
                                                handleDeleteTask={handleDeleteTask}
                                            ></TaskCard>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :
                        <div className="flex w-full flex-col justify-center items-center">
                            <p className="mt-16 mb-2 text-center text-2xl font-bold mx-auto">You have no Completed Task to Display.</p>
                            <div className="flex justify-center items-center pb-10">
                                <BallTriangle
                                    height={100}
                                    width={100}
                                    radius={5}
                                    color="#149ce0"
                                    ariaLabel="ball-triangle-loading"
                                    wrapperClass={{}}
                                    wrapperStyle=""
                                    visible={true}
                                />
                            </div>
                        </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyTasks;