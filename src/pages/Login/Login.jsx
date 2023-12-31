import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../components/SocialLogin";


const Login = () => {
    // to hide and show password
    const [hide, setHide] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    // for react hook form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    // form submit operation
    const handleLogIn = data => {
        // call the signIn function
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                reset();
                Swal.fire({
                    title: 'User successfully logged in',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                // for [sweet-alert] on failed login
                Swal.fire({
                    title: 'invalid-login-credentials',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
    }

    return (
        <div>
            <Helmet>
                <title>M-Task | Login</title>
            </Helmet>

            <div className="min-h-screen bg-base-200 lg:py-48 bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://i.ibb.co/hdH5FbJ/desktop-wallpaper-pulsar-220-login-page.jpg")` }}>
                <div className="hero-content lg:ms-24">
                    <div className="card md:w-1/2 max-w-md shadow-2xl bg-transparent mt-8">
                        <h1 className="text-5xl text-white font-bold my-2 mx-4 mt-12">Please Join Us!</h1>
                        <form onSubmit={handleSubmit(handleLogIn)} className="card shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="emaill" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    {/* password input with [react-hook-form] validation */}
                                    <input type={hide ? "password" : "text"} name="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                                        placeholder="password" className="input input-bordered" />
                                    <span className="btn btn-xs bg-transparent mt-1 w-1/2" onClick={() => setHide(!hide)}>{hide ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>

                                    {errors.password?.type === 'required' && <p className="text-red-600 font-semibold py-1">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600 font-semibold py-1">Password must be at least 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600 font-semibold py-1">Password must contain at least one uppercase, one lowercase, one number and one special character</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt text-white link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary bg-sky-500" type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                        {/* social login */}
                        <div className="form-control mt-6">
                            <div className="w-1/2 mx-auto">
                                <SocialLogin task='Login'></SocialLogin>
                            </div>
                            <p className="text-center text-md text-white my-2"><small>New to Fresh Foods? <Link to="/signup" className="font-bold underline">Create an account</Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;