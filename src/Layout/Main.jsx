import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

const Main = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])


    return (
        <>
        {
            loading ?
                <div className="bg-black h-screen flex justify-center items-center">
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
                :
                <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
        }
    </>
        // <div>
        //     <Navbar></Navbar>
        //     <div className="max-w-screen-xl mx-auto">
        //         <Outlet></Outlet>
        //     </div>
        //     <Footer></Footer>
        // </div>
    );



};

export default Main;