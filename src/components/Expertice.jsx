
import BannerBackground from "../assets/vivid.jpg";
const Expertise=()=>{
    return(
        <> 
        <div 
        style={
            {
              backgroundImage: `url(${BannerBackground})`,
              backgroundSize: "cover",  
            }}className="py-5"> 
         
    <h1 className="text-3xl font-bold underline text-center pt-5">My Expertise</h1>
    {/*main container*/}
    <div className="box-container flex my-10 items-center">
    <div className="flex justify-center">{/*text container*/}
     <div className="w-2/3 text-center space-y-4 text-white">
     <h1 className="text-4xl font-bold">I love these techenologies</h1>
    <p>HTML defines the structure of your content, CSS determines the style and layout, and JavaScript makes the content interactive; therefore, it makes the most sense to learn them in that order.</p>
    <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">Hire Me</button>
     </div>
    </div>
    <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">{/*skill container*/}
     <div className="flex w-2/3 space-x-3 space-y-3 flex-wrap">
     <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer ">
    Core Java</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    C</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    HTML5</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    css</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    Java Script</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    React.js</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    SQL</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    J Query</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2  rounded-full hover:bg-orange-500 cursor-pointer">
    Tailwind CSS</p>
     </div>
    </div>
    </div>
    </div>
    </>
)};
export default Expertise;