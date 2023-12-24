
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
                        <div className="bg-[url('https://i.ibb.co/cwB1r3Y/f2fe3d07a493239289c85a7a6c2e3e3a1200x800.jpg')] bg-cover bg-center rounded-sm">
                            <div className="bg-black bg-opacity-40 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Wanna Explore Tech World of <br /><span className="text-secondary text-4xl">New Dimension</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to SCC Technovision Inc., where innovation meets excellence. We are thrilled to embark on a journey of technological advancements with you. Let us create a future together!</p>
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
                        <div className="bg-[url('https://i.ibb.co/6DZQdXx/360-F-296619471-i-EGwe-Ty9-Vsok-Htb-CJs-Vmyez0d2rocmm-A.jpg')] bg-cover bg-center rounded-sm">
                        <div className="bg-black bg-opacity-50 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Wanna Explore Tech World of <br /><span className="text-secondary text-4xl">New Dimension</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to SCC Technovision Inc., where innovation meets excellence. We are thrilled to embark on a journey of technological advancements with you. Let us create a future together!</p>
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
                        <div className="bg-[url('https://i.ibb.co/87KnfgD/pngtree-blue-minimalist-medical-banner-image-261515.jpg')] bg-cover bg-center rounded-sm">
                        <div className="bg-black bg-opacity-70 ">
                                <div className="max-w-4xl mx-auto text-white text-left pt-10 lg:pt-40 px-1 md:px-16 pb-24">
                                    <h1 className="mb-5 text-xl md:text-3xl font-bold">Wanna Explore Tech World of <br /><span className="text-secondary text-4xl">New Dimension</span></h1>
                                    <p className="mb-5 text-xs md:text-sm lg:text-lg font-semibold">Welcome to SCC Technovision Inc., where innovation meets excellence. We are thrilled to embark on a journey of technological advancements with you. Let us create a future together!</p>
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
