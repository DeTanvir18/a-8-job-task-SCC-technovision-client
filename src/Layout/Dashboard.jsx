import { Helmet } from "react-helmet-async";
import { FaHome, FaIdBadge, FaPlus } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="flex">
                <div className="min-h-screen bg-sky-400">
                    <div className="w-64">
                        <div className="flex flex-col justify-center items-center text-white mx-0 lg:mx-2 mt-5 space-y-3 p-2 md:p-4">
                            <div>
                                <figure><img className="w-40 rounded-full lg:rounded-full" src={user?.photoURL} alt="user-img" /></figure>
                            </div>
                            <div className="text-lg">
                                <div className="space-y-1">
                                    <h3><span className="font-bold"></span>{user?.displayName}</h3>
                                </div>
                                <div className="space-y-1">
                                    <h3><span className="font-bold"></span>{user?.email}</h3>
                                </div>
                                <div className="space-y-1">
                                    {/* <h3><span className="font-bold text-sky-500">Total Tasks: </span>{adminMeals.length}</h3> */}
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center font-semibold text-md py-1 rounded-md"><FaIdBadge />  General</span>
                                </div>
                            </div>
                        </div>

                        <ul className="menu">
                            {
                                <>
                                    {/* <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li> */}
                                    <li>
                                        <NavLink to="/dashboard/myTask">
                                            <FaTasks />
                                            My Tasks</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addTask">
                                            <FaPlus />
                                            New Task</NavLink>
                                    </li>
                                    {/* <li>
                                    <NavLink to="/dashboard/toDo">
                                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                        Requested Meals ({myMeals?.length}) </NavLink>
                                </li> */}
                                    {/* shared nav links */}
                                    <div className="divider"></div>
                                    <div className="divider mt-1"></div>
                                    <li>
                                        <NavLink to="/">
                                            <FaHome></FaHome>
                                            Home</NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="w-4/12 mx-auto mb-3 md:my-16 text-center">
                        <h3 className="md:text-5xl text-[#286e74] font-bold md:border-b-4 py-6">Dashboard</h3>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;