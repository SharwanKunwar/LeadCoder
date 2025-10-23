import { Link, useLocation } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import Profile from '../../Model/Profile';
import { useState } from 'react';
import {useProfileStore} from "../../src/store/useProfileStore";

function ProblemNav() {

    const location = useLocation();
    const currentPath = location.pathname

    const profile = useProfileStore((state) => state.profile);
    const profileImg = profile?.image || "/LeadCoder.png";

    const [openProfile, setOpenProfile] = useState(false);

return (
    <>
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
                            <li className='hover:text-white'>Home</li>
                        </Link>
                        
                        <Link to="concepts">
                            <li style={{ color: currentPath === '/concepts' ? 'white' : 'gray' }} className='tracking-tight'>My Learning Path</li>
                        </Link>

                        <Link to="problems">
                            <li style={{ color: currentPath === '/problems' ? 'white' : 'gray' }} className='hover:text-white'>Problems</li>
                        </Link>

                        
                    </ul>
                </nav>

                <button onClick={() => setOpenProfile((prev) => !prev)} className="bg-white rounded-full w-[40px] h-[40px] mastWhiteShadow flex justify-center items-center object-cover" >
                    <img src={profileImg} alt="Profile" className="w-full h-full object-cover rounded-full" />
                </button>

            </div>
        </div>

        {
            openProfile && ( <Profile open={openProfile} onClose={() => setOpenProfile(false)} /> )
        }

    </div>
    </>
  )
}

export default ProblemNav
