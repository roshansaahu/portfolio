import { useState } from "react";

 const Header = () => {

    const [Name, setName] = useState("ROSHAN SAHU");
    const [menuLinks, setMenuLinks] = useState([
        {
            title:"Home",
            link:"/home",
            id: 1,
        },
        {
            title:"About",
            link:"/About",
            id: 2,
        },
        {
            title:"Skills",
            link:"/Skills",
            id: 3,
        },
        {
            title:"Portfolio",
            link:"/Portfolio",
            id: 4,
        },
        {
            title:"Contact",
            link:"/Contact",
            id: 5,
        },
    ]);
    const [HireButton,setHirebutton] = useState ({

        title: "Hire Me",
        link:"/hire-me",

    })
    return (
        <>
            <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
            <div>
                {/*brand logo*/}
                <h1 className="text-1xl font-bold">ROSHAN SAHU</h1>
            </div>
            <div className="space-x-9">
                {/*Menu links*/}

                { menuLinks.map((link) => (
                    <a key={link.id}href={link.link} className="hover:text-yellow-600">{link.title}</a>
                     )
                  )}
             </div>
            <div>
                {/*buttons*/}
                <a href ="HireButton.link"
                className="px-3 py-2 bg-orange-400 shadow-lg rounded-full text-1xl">{HireButton.title}</a>
            </div>

            </div>
             
        </>
    );
    
 };
    export default Header;
