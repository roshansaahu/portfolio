import { useRef } from "react";
import BannerImage from "../assets/1234.png";
import BannerBackground from "../assets/vivid.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
const Banner = ()=>{

  const el = useRef(null);

  useEffect(()=>{

    const typed = new Typed(el.current, {
      strings: ["I am a Web Developer" , "Frontend Developer","Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };

  },[])
    return(
        <div style={
            {
              backgroundImage: `url(${BannerBackground})`,
              backgroundSize: "cover",  
            }
        }
         className="main container flex items-center pt-10">
            <div  
            className=" w-full flex items-center justify-center text-slate-200">{/*text container*/}
            <div className="w-2/3"> 
            <h3 className="text-3xl font-semibold">Hi,I am </h3>
            <h1 className=" mt-2 text-5xl font-bold">Roshan Sahu</h1>
            <h2 className="mt-2 text-2xl">  I am <span className ="font-bold underline" ref={el}></span></h2>
            <p className="mt-2">To work in a challenging and dynamic environment
               which gives me an opportunity to add value to the
               company and enhance my knowledge and
               continuous development of upgrading knowledge
               by execution of vested responsibilities by the
               organization with loyalty and integrity.</p>
               <div className="icons-container space-x-8 pt-3">
                 <a className="cursor cursor-pointer"> 
                <i className="fa-brands text-3xl fa-facebook"></i>
                </a>
                <a className="cursor cursor-pointer"> 
                <i className="fa-brands text-3xl fa-instagram"></i>
                </a>
                <a className="cursor cursor-pointer"> 
                <i className="fa-brands text-3xl fa-youtube"></i>
                </a>
                <a className="cursor cursor-pointer"> 
                 <i className="fa-brands text-3xl fa-linkedin-in"></i>
                </a>
                <a className="cursor cursor-pointer  "> 
                <i className="fa-brands text-3xl fa-github"></i>
                </a>
                 
               </div>
               <br />
               <a className=" text-1/2xl px-2 py-2 bg-blue-600 rounded-full shadow-lg" href="/contact">Contact me</a>
               </div>
             </div>

            <div className=" w-full flex justify-center">{/*image container*/}
            <img className="rounded-full shadow w-100" src={BannerImage}></img>

            </div>
            </div>
        
    );
};
export default Banner;