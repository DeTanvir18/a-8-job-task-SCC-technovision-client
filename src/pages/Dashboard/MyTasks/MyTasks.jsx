import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaDeleteLeft } from "react-icons/fa6";
import { BiBookAdd } from "react-icons/bi";
import { BallTriangle } from "react-loader-spinner";


const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([]);
    const myTasks = tasks.filter(task => task.email === user.email);
    const toDo = myTasks.filter(task => task.status === "to-do");
    const ongoing = myTasks.filter(task => task.status === "ongoing");
    const completed = myTasks.filter(task => task.status === "completed");
    console.log(toDo);
    console.log(ongoing);
    console.log(completed);


    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
    }, [])




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
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${task.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div className="w-full lg:w-1/2 mx-auto">
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
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                        {
                                            toDo.map((task, index) => <tr
                                                key={task._id}
                                            >
                                                <td className="font-extrabold text-xl">{index + 1}</td>
                                                <td>{task.title}</td>
                                                <td className={task.status === 'to-do' ? "font-bold text-red-500" : "text-green-500 font-bold"}>{task.status}</td>
                                                <td className="text-start">{task.description}</td>
                                                <td>
                                                    <Link to={`/dashboard/updatetask/${task._id}`}>
                                                        <button className="btn btn-ghost text-2xl text-white bg-green-500 px-2" ><BiBookAdd></BiBookAdd></button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteTask(task)} className="btn btn-ghost text-2xl text-white bg-red-500 px-2" ><FaDeleteLeft /></button>
                                                </td>
                                            </tr>)
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
                                            <th>Description</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* table rows */}
                                        {
                                            ongoing.map((task, index) => <tr
                                                key={task._id}
                                            >
                                                <td className="font-extrabold text-xl">{index + 1}</td>
                                                <td>{task.title}</td>
                                                <td className={task.status === 'to-do' ? "font-bold text-red-500" : "text-green-500 font-bold"}>{task.status}</td>
                                                <td className="text-start">{task.description}</td>
                                                <td>
                                                    <Link to={`/dashboard/updatetask/${task._id}`}>
                                                        <button className="btn btn-ghost text-2xl text-white bg-green-500 px-2" ><BiBookAdd></BiBookAdd></button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteTask(task)} className="btn btn-ghost text-2xl text-white bg-red-500 px-2" ><FaDeleteLeft /></button>
                                                </td>
                                            </tr>)
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
                                    <th>Description</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* table rows */}
                                {
                                    completed.map((task, index) => <tr
                                        key={task._id}
                                    >
                                        <td className="font-extrabold text-xl">{index + 1}</td>
                                        <td>{task.title}</td>
                                        <td className={task.status === 'to-do' ? "font-bold text-red-500" : "text-green-500 font-bold"}>{task.status}</td>
                                        <td className="text-start">{task.description}</td>
                                        <td>
                                            <Link to={`/dashboard/updatetask/${task._id}`}>
                                                <button className="btn btn-ghost text-2xl text-white bg-green-500 px-2" ><BiBookAdd></BiBookAdd></button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteTask(task)} className="btn btn-ghost text-2xl text-white bg-red-500 px-2" ><FaDeleteLeft /></button>
                                        </td>
                                    </tr>)
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
        </div>
    );
};

export default MyTasks;