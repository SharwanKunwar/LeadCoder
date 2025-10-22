import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import Profile from '../../Model/Profile';

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname
    const [openProfile, setOpenProfile] = useState(false);
    
    
    
return (
    <div className=" text-white text-center text-lg ">
        {/* holding left and right div  */}
        <div className=" py-5 h-full  flex justify-between border-b-1 border-gray-400/30  px-15 mx-10">
            {/* left div  */}
            <div className="flex gap-5"> 
                <div className="flex justify-center items-center gap-3">
                    <img src="/LeadCoder.png" alt="img" className="h-[30px] w-[30px] p-1 rounded-full bg-sky-400" /> 
                    <h1 className="text-[20px] font-bold">LeadCoder</h1>
                </div>
                <nav className=" flex justify-center items-center text-neutral-400">
                    <ul className="flex justify-center items-center gap-5 ">
                        <Link to="/">
                            <li style={{ color: currentPath === '/' ? 'white' : 'gray' }} >Dashboard </li>

                        </Link>
                        <Link to="concepts">
                            <li style={{ color: currentPath === '/concepts' ? 'white' : 'gray' }}>Concepts</li>
                        </Link>

                        <Link to="projects">
                            <li style={{ color: currentPath === '/projects' ? 'white' : 'gray' }}>Projects</li>
                        </Link>

                        <Link to="community">
                            <li style={{ color: currentPath === '/community' ? 'white' : 'gray' }}>Community</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            {/* right div  */}
            <div className="flex justify-center items-center gap-7 text-[#8B8D93]">
                <div className="bg-[#233648] rounded-lg w-[300px] h-[40px] flex justify-start items-center gap-3 mastWhiteShadow">
                    <div className=" rounded-full pl-3 w-[50px] h-[50px] flex justify-center items-center"><i className="ri-search-line text-[#8B8D93]"></i></div>
                    <div>
                        <input type="text" placeholder='Search' className='border-none outline-none'/>
                    </div>
                </div>

                <button onClick={() => setOpenProfile((prev) => !prev)} className="bg-white rounded-full w-[40px] h-[40px] mastWhiteShadow flex justify-center items-center object-cover" ><img src="/LeadCoder.png" alt="img" /></button>

            </div>
        </div>

        {
            openProfile && ( <Profile open={openProfile} onClose={() => setOpenProfile(false)} /> )
        }

    </div>
);
}
