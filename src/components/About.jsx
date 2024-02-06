import BannerImage from '../assets/ro4.png'
const About=() => {
    return<>
        <div className="main container border py-10 bg-gray-200">
            <h1 className=" text-center pb-16 text-3xl font-bold underline">About Me</h1>
            <div className="flex item-center">{/*main container of About*/}
            <div className='w-full flex justify-center'>{/*image container*/}
            <img className ="rounded-full" src={BannerImage} alt="Roshan sahu"/>

            </div>
            <div className='w-full flex justify-center'>{/*text container*/}
             <div className='space-y-5 w-2/3'>
             <h1 className='text-3xl font-semibold'>Frontend Developer & MERNSTACK Developer</h1>
            <p>  A MERN Stack Developer , I honed my expertise in building scalable and efficient web applications.
             I am well-versed in the entire MERN stack and have hands-on experience in developing and deploying web applications with these technologies.</p>
            <button className="bg-orange-500 px-3 py-2 text-1xl rounded-full shadow-lg">Read More..</button>
             </div>
            </div>

            </div>
        </div>
    </>;
    
};
export default About;