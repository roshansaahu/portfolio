import BannerBackground from "../assets/abc.jpg";
const Services=()=>{
    return (
    <>
    <div style={
            {
              backgroundImage: `url(${BannerBackground})`,
              backgroundSize: "cover",  
            }}
     className="main-container py-10">
    <h1 className="text-3xl font-bold text-center underline">My Services</h1>
    <div className="Services-container space-x-5 flex mt-12">
    <div className=" cursor-pointer hover:bg-slate-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
        <i className=" text-3xl fa-solid fa-laptop-code"></i>
        <h1 className="text-2xl">Web Development</h1>
        <p>Software engineer with 5+ years of expertise in Java and Python development, seeking a position as a Senior Software Engineer at Microsoft. Has strong problem-solving skills, agile development experience, and passion for innovation to contribute to the development of cutting-edge software solutions at Microsoft.</p>
        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
    </div>
    <div className=" cursor-pointer hover:bg-slate-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
    <i className=" text-3xl fa-solid fa-cubes"></i>
        <h1 className="text-2xl">Frontend Development</h1>
        <p>Software engineer with 5+ years of expertise in Java and Python development, seeking a position as a Senior Software Engineer at Microsoft. Has strong problem-solving skills, agile development experience, and passion for innovation to contribute to the development of cutting-edge software solutions at Microsoft.</p>
        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
    </div>
    <div className=" cursor-pointer hover:bg-slate-100 space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
    <i className=" text-3xl fa-solid fa-code"></i>
        <h1 className="text-2xl">Backend Development</h1>
        <p>Software engineer with 5+ years of expertise in Java and Python development, seeking a position as a Senior Software Engineer at Microsoft. Has strong problem-solving skills, agile development experience, and passion for innovation to contribute to the development of cutting-edge software solutions at Microsoft.</p>
        <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Check</button>
    </div>

    </div>

    </div>

    </>
    );
};
export default Services;