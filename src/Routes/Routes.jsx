import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AddTask from "../pages/Dashboard/AddTask/AddTask";
import MyTasks from "../pages/Dashboard/MyTasks/MyTasks";
import UpdateTask from "../pages/Dashboard/UpdateTask/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myTask',
                element: <MyTasks></MyTasks>
            },
            {
                path: '/dashboard/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/dashboard/updatetask/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`https://a8-job-task-scc-technovision-server.vercel.app/taskdetails/${params.id}`)
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;