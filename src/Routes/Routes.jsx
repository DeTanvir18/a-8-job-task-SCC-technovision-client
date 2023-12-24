import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

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
        //     {
        //         path: '/job/:id',
        //         element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        //         loader: ({ params }) => fetch(`https://a11-career-hunt-server.vercel.app/jobdetails/${params.id}`)
        //     },
        //     {
        //         path: '/alljobs/jobdetails/:id',
        //         element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        //         loader: ({ params }) => fetch(`https://a11-career-hunt-server.vercel.app/jobdetails/${params.id}`)
        //     },
        //     {
        //         path: 'alljobs',
        //         element: <AllJobs></AllJobs>
        //     },
        //     {
        //         path: 'appliedjobs',
        //         element: <AppliedJobs></AppliedJobs>
        //     },
        //     {
        //         path: 'addajob',
        //         element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>
        //     },
        //     {
        //         path: 'myjobs',
        //         element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        //     },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default router;