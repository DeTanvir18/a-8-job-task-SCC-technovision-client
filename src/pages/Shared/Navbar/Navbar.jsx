import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Successfully Logged Out!',
                    'successful'
                )
                navigate('/')
            })
            .then()
    }

    const navLinks = <>
        <div className="lg:hidden block absolute w-full top-16 right-0 left-0 bg-slate-600 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="/"><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Home</li></Link>
                <Link spy={true} smooth={true} ><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">About</li></Link>
                <Link spy={true} smooth={true} ><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Services</li></Link>
                <Link spy={true} smooth={true} ><li className="my-4 py-4 border-b border-slate-400 hover:bg-slate-400 hover:rounded">Projects</li></Link>
                {
                    !user &&
                    <Link to="/login">
                        <button className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Login</button>
                    </Link>
                }
                {
                    user &&
                    <button onClick={handleSignOut} className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Log Out</button>
                }
            </ul>
        </div>
    </>



    return (
        <nav className="bg-black text-white">
            <div className="h-10vh max-w-[1600px] mx-auto flex justify-between z-50 px-4 lg:py-5 py-4 border-b border-slate-400">
                <div className="flex items-center flex-1">
                    <Link to="/">
                        <span className="text-3xl font-semibold">SCC Tech</span>
                    </Link>
                </div>

                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="/">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Projects</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </Link>
                            {
                                !user &&
                                <Link to="/login">
                                    <button className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Login</button>
                                </Link>
                            }
                            {
                                user &&
                                <button onClick={handleSignOut} className="hover:text-fuchsia-500 transition border-b-2 border-slate-600 hover:border-fuchsia-600 cursor-pointer">Log Out</button>
                            }
                        </ul>
                    </div>
                </div>

                <div>
                    {click && navLinks}
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;