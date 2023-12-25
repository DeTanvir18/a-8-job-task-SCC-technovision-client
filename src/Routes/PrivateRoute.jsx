import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { BallTriangle } from "react-loader-spinner";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="bg-black h-screen flex justify-center items-center">
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#fff"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />
    </div>
    }
    if (user) {
        return children;
    }
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to go there.'
    })

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;