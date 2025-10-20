import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

export default function Navbar() {
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
                            <li>Dashboard</li>
                        </Link>
                        <Link to="concepts">
                            <li>Concepts</li>
                        </Link>

                        <Link to="projects">
                            <li>Projects</li>
                        </Link>

                        <Link to="community">
                            <li>Community</li>
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
                <button className="bg-white rounded-full w-[40px] h-[40px] mastWhiteShadow">a</button>
            </div>
        </div>
    </div>
);
}
