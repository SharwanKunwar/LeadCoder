import 'remixicon/fonts/remixicon.css'

export default function Navbar() {
return (
    <div className=" text-white p-4 text-center text-lg bg-red-100">
        {/* holding left and right div  */}
        <div className=" py-2 h-full  flex justify-between border-b-1 border-gray-400/30 bg-yellow-400">
            {/* left div  */}
            <div className="flex gap-5"> 
                <div className="flex justify-center items-center gap-1">
                    <img src="/LeadCoder.png" alt="img" className="h-[30px] w-[30px] p-1 rounded-full bg-white" /> 
                    <h1 className="text-[20px] font-bold">LeadCoder</h1>
                </div>
                <nav className=" flex justify-center items-center ">
                    <ul className="flex justify-center items-center gap-5 ">
                        <li>Dashboard</li>
                        <li>Concepts</li>
                        <li>Concept Details</li>
                        <li>Problem Solver</li>
                    </ul>
                </nav>
            </div>
            {/* right div  */}
            <div className="flex justify-center items-center gap-3 text-[#8B8D93]">
                <div className="bg-[#233648] rounded-lg w-[250px] h-[40px] flex justify-start items-center gap-3 ">
                    <div className=" rounded-full pl-3 w-[40px] h-[40px] flex justify-center items-center"><i className="ri-search-line text-[#8B8D93"></i></div>
                    <div>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
                <button className="bg-white rounded-full w-[40px] h-[40px]">a</button>
            </div>
        </div>
    </div>
);
}
