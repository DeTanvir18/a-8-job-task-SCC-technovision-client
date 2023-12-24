import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white">
                <div className="p-2 lg:p-10 rounded-lg py-14 max-w-[1600px] mx-auto">
                    <div className="w-3/4 text-left">
                        <hr className="mt-4" />
                        <hr className="mb-4" />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 lg:gap-10'>
                        <div>
                            <Link to="/"><h2 className="text-xl font-semibold">SCC Technovision Inc.</h2></Link>
                            <div className="flex text-sm font-bold mb-2">
                                <Link to="/login"><button className="underline me-1">Log In</button></Link>
                                <p>/</p>
                                <Link to="/Signup"><button className="underline ms-1">Sign Up</button></Link>
                            </div>
                            <Link to="https://facebook.com/"><img src='https://i.postimg.cc/Dysx5LPP/Group-9969.png' /></Link>
                        </div>
                        <div>
                            <ul className="text-sm font-medium">
                                <li>Why Us?</li>
                                <li>Tech Services</li>
                                <li>Terms</li>
                                <li>Contact</li>
                                <li>Social Media</li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/Pr4wtqXk/Frame-2.png" alt="" />
                            <div>
                                <p>019-4533-3555</p>
                                <p>017-3535-5345</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/hG7v74Bv/Frame-3.png" alt="" />
                            <div>
                                <p>scc.techno.vision@gmail.com</p>
                                <p>technovision.scc@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.postimg.cc/wvfPFcYk/new.jpg" alt="" />
                            <div>
                                <p>333, Tejgaon,<br />Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-3/4 text-left">
                            <hr className="mt-4" />
                            <hr className="mb-4" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="bg-white max-w-[300px] p-2">
                                <Link to="/"> <img src="https://i.ibb.co/9TMQKNy/logo-1200x70.png" alt="" /></Link>
                            </div>
                            <div>
                                <iframe
                                    title="Google Map"
                                    width="200"
                                    height="100"
                                    frameBorder="0"
                                    style={{ border: 0 }}

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233378.83731996172!2d90.2297421052546!3d23.941184441795553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65555555555%3A0x74d4cf20f7636c4f!2sTECHNOVISION!5e0!3m2!1sen!2sbd!4v1703420947054!5m2!1sen!2sbd"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div>
                                <p className="font-bold">SCC Technovision Inc.<br />Providing reliable service since 2015</p>
                                <p className="font-semibold">© 2015 - 23 SCC Technovision Inc. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;