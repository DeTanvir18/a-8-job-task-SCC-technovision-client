

const About = () => {
    return (
        <div className='bg-slate-300'>
            <div className=' max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-20 px-6 py-20'>
                <div className='flex-1'>
                    <img src="https://i.ibb.co/C52ghrv/flat-design-work-time-management-concept-vector.jpg" alt="" className="lg:h-[280px]" />
                </div>
                <div className='flex-1'>
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <h1 className="text-3xl font-semibold mb-4 leading-normal uppercase text-sky-700">About Us</h1>
                        <div>
                            <div>
                                <p>M-Task is a dynamic task management site designed to streamline organization and productivity. With an intuitive interface, users can create, assign, and track tasks effortlessly. The platform accommodates diverse needs, catering to students, engineers, and bankers with distinct task categories. M-Task offers priority settings, real-time status updates, and comprehensive descriptions for each task. The site promotes collaboration, allowing teams to coordinate seamlessly on projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;