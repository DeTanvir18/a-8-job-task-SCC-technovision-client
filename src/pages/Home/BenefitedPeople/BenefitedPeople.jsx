import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft } from "react-icons/fa6";

const BenefitedPeople = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };


    return (
        <div>
            <div className="slider-container mt-8 mb-8 max-w-[1200px] mx-auto">
                <div className="max-w-[700px] mx-auto text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-sky-700 font-extrabold py-2 mt-16 mb-1">From Beneficiaries!</h1>
                    <p className="text-[10px] md:text-[13px] font-medium mb-8">Optimize your productivity with our Time Management platform. Streamline tasks, set priorities, and track progress effortlessly. Our intuitive interface helps you organize your schedule, meet deadlines, and achieve your goals efficiently. Boost your efficiency, reduce stress, and take control of your time. Join today for a more focused and balanced life.</p>
                </div>
                <Slider {...settings} >
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/j87yMfR/bf8c99ac3a56d416e2efc11268266c09.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Tania Ahmed</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Govt. Officer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >At M-Task, client satisfaction is our top priority. We pride ourselves on delivering a seamless task management experience tailored to your needs. Our user-friendly interface, personalized support, and constant innovation ensure that you not only meet but exceed your project goals.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/ZLBpMN3/user-image-38-Jwv-VPAj9a-Gcg1fc-Prm-Vt-Fhxgv-Be3c2-Ncz4-OBph-Vk.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Tamim Hasan</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Banker</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >M-Task has transformed how I handle projects. The interface is intuitive, and the personalized support is unmatched. I've increased productivity and efficiency, and the innovative features keep me ahead. Highly recommend for anyone serious about effective task management!</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/wpK5m4V/a802de28025728f1d489aa7eec0b996a-1.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Sifat Shahriar</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Web Developer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >As an Web Developer, M-Task has been a game-changer. It simplifies complex tasks, and the constant updates make it even better. The client support is excellent, responding promptly to queries. M-Task has truly exceeded my expectations.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/4VJMptd/1000-F3790020091yf-UXksnauvhw-Bwd-Zui-Opq-Swrv-COEFe6200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Tanim Khan</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Computer Operator</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >M-Task has streamlined our team's workflow. The collaborative features are fantastic, making it easy to coordinate tasks. The detailed analytics also provide insights for improvement. M-Task is an invaluable tool for anyone aiming for efficient task management.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/x2CVxsW/151824617photodeprofildunjeuneemployderaceblancheheureuxregardantlacamraposantdansunbureau200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Sakib Bin Salman</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Student</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >I've tried various task management tools, and M-Task stands out. The user interface is sleek, and the customization options are robust. It adapts to my workflow seamlessly, making project management a breeze. M-Task is now an essential part of my daily routine.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center text-center p-12 bg-[#ebebeb]'>
                            <div className='text-6xl text-pink-800'>
                                <FaQuoteLeft className=''></FaQuoteLeft>
                            </div>
                            <img src="https://i.ibb.co/ftJyTMV/1000-F367464887f0w1-Jr-L8-Pddfu-H3-P2j-SPl-IGj-KU2-BI0rn200x200.jpg" alt="" className='w-40 rounded-full' />
                            <h5 className="text-xl lg:text-4xl text-pink-800 font-bold">Pinki Roy</h5>
                            <h6 className="text-sm lg:text-xl text-sky-600 font-bold">Graphic Designer</h6>
                            <p className="my-4 text-xs md:text-sm lg:text-lg" >M-Task has simplified my work life. The mobile app keeps me connected on the go, and the collaborative features are perfect for team projects. The responsiveness of the M-Task team to user feedback is impressive. It's a reliable companion for effective and stress-free task management.</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default BenefitedPeople;