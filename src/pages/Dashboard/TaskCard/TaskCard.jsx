import { BiBookAdd } from "react-icons/bi";
import { FaDeleteLeft } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ index, task, handleDeleteTask }) => {


    const handleUpdateTask = e => {
        const form = e.target;
        const title = form.title.value;
        const status = form.status.value;
        const priority = form.priority.value;
        const deadline = form.deadline.value;
        const description = form.description.value;

        const updatedTask = {
            title,
            status,
            priority,
            deadline,
            description
        }

        // send data to the server
        fetch(`https://a8-job-task-scc-technovision-server.vercel.app/tasks/update/${task._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Task Info Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
            e.target.reset();
            Navigate('/');
    }

    return (
        <tr
            key={task._id}
        >
            <td className="font-extrabold text-xl">{index + 1}</td>
            <td>{task.title}</td>
            <td className={task.status === 'to-do' ? "font-bold text-red-500" : "text-green-500 font-bold"}>{task.status}</td>
            <td>{task.priority}</td>
            <td>{task.deadline}</td>
            <td className="text-start">{task.description}</td>
            <td>
                <div>
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-ghost text-2xl text-white bg-green-500 px-2" ><BiBookAdd></BiBookAdd></button>
                    {/* //* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <span className="font-bold text-amber-800 my-8 text-lg">Update Your Task Here.</span>
                            <form onSubmit={(e) => { handleUpdateTask(e); document.getElementById('my_modal_2').close(); }}>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" name="title" defaultValue={task.title} placeholder="Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Status</span>
                                    </label>
                                    <input type="text" name="status" defaultValue={task.status} placeholder="Status" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Priority</span>
                                    </label>
                                    <select
                                        defaultValue={task.priority}
                                        name="priority"
                                        className="select select-bordered w-full"
                                        required
                                    >
                                        <option disabled value="default">Choose Your Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div className="form-control my-2">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input type="date" name="deadline" defaultValue={task.deadline} placeholder="Deadline" className="input input-bordered" required />
                                </div>
                                <div className="form-control my-2">
                                    <label className="block mb-2 text-sm font-bold">Description</label>
                                    <textarea type='text' name="description" defaultValue={task.description} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your toy description here..." required></textarea>
                                </div>
                                <div className="form-control  mt-6 w-1/3 mx-auto my-4">
                                    <input method="dialog" className="btn btn-info" type="submit" value="Update" />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </td>
            <td>
                <button onClick={() => handleDeleteTask(task)} className="btn btn-ghost text-2xl text-white bg-red-500 px-2" ><FaDeleteLeft /></button>
            </td>
        </tr>
    );
};

export default TaskCard;