
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
                        <div className="bg-[url('https://i.ibb.co/Y8TxCKm/1689674378593.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-50 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                    <Link to="/login">
                                        <button className="btn btn-accent btn-outline">
                                            <span className='text-white'>Let's Explore</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="bg-[url('https://i.ibb.co/C6TK9nL/project-management-1.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-80 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                    <Link to="/login">
                                        <button className="btn btn-accent btn-outline">
                                            <span className='text-white'>Let's Explore</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="bg-[url('https://i.ibb.co/5cYQKnF/Getty-Images-844535646.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-70 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Streamline Your Tasks with Ease <br /><span className="text-secondary text-4xl">Effortless Productivity</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to our efficient task management site! Streamline your workflow, boost productivity, and achieve your goals effortlessly. Get ready for a seamless experience in organizing tasks and reaching milestones.</p>
                                    <Link to="/login">
                                        <button className="btn btn-accent btn-outline">
                                            <span className='text-white'>Let's Explore</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
