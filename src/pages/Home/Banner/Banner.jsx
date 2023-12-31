
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-8 mt-1"
            >
                <SwiperSlide>
                    <div>
                        <div className="bg-[url('https://i.ibb.co/FbxmzrM/f2fe3d07a493239289c85a7a6c2e3e3a.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-40 ">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 2 }}
                                    transition={{ duration: 4 }}
                                >
                                    <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                        <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                        <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                        <Link to="/login">
                                            <button className="btn btn-accent btn-outline">
                                                <span className='text-white'>Let's Explore</span>
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="bg-[url('https://i.ibb.co/YWZr7Mb/1-PM-banner2-1024x422.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-70 ">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 2 }}
                                    transition={{ duration: 4 }}
                                >
                                    <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                        <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                        <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                        <Link to="/login">
                                            <button className="btn btn-accent btn-outline">
                                                <span className='text-white'>Let's Explore</span>
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="bg-[url('https://i.ibb.co/C6TK9nL/project-management-1.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-70 ">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 2 }}
                                    transition={{ duration: 4 }}
                                >
                                    <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                        <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                        <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                        <Link to="/login">
                                            <button className="btn btn-accent btn-outline">
                                                <span className='text-white'>Let's Explore</span>
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </>
    );
}
