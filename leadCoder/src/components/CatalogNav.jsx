import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'

export default function Navbar() {
return (
    <div className=" text-white text-center text-lg ">
        {/* holding left and right div  */}
        <div className=" py-3 h-full  flex justify-between border-b-1 border-gray-400/30  px-15 mx-10">
            {/* left div  */}
            <div className="flex gap-5"> 
                <div className="flex justify-center items-center gap-3">
                    <img src="/LeadCoder.png" alt="img" className="h-[30px] w-[30px] p-1 rounded-full bg-sky-400" /> 
                    <h1 className="text-[20px] font-bold">LeadCoder</h1>
                </div>
                
            </div>
            {/* right div  */}
            <div className="flex justify-center items-center gap-7 text-[#8B8D93]">
                <nav className=" flex justify-center items-center text-neutral-400">
                    <ul className="flex justify-center items-center gap-5 ">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        
                        <Link to="concepts">
                            <li className='tracking-tight'>My Learning Path</li>
                        </Link>

                        <Link to="projects">
                            <li>Catalog</li>
                        </Link>

                        
                    </ul>
                </nav>

                <button className="bg-white rounded-full w-[40px] h-[40px] mastWhiteShadow">a</button>
            </div>
        </div>
    </div>
);
}
