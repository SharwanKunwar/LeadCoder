import React, { useState } from 'react'

function Dashboard() {
  const [user, setUser] = useState("Sharwan kunwar");
  return (
    <>
      <div className='w-full  h-screen flex gap-10 px-15 overflow-y-scroll no-scrollbar'>

        {/* left div  ------------------------------------------------------------------------------*/}
        <div className='w-[65%] py-10'>

          <div className='w-full h-[30vh] rounded-2xl flex justify-center items-end pb-10 mastWhiteShadow' style={{background: 'linear-gradient(44deg,#3d5c4d,#acb167)'}}>
            <h1 className='text-3xl text-white font-medium'>Welcome back, {user} You are a Code Master</h1>
          </div>

          <div className='mt-10 h-[50vh] py-1 px-1 overflow-y-scroll no-scrollbar'>
            <h1 className='text-white text-2xl font-medium'>Contunue Learning</h1>
            <div className=' mt-10 grid grid-cols-2 grid-row-2 gap-7'>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
          </div>
          </div>

          <div className='mt-10'>
            <h1 className='text-white text-2xl font-medium'>Recommended for You</h1>
            <div className=' mt-10 grid grid-cols-3 grid-row-2 gap-7'>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            <div className='bg-[#1A2633] h-[170px] rounded-xl mastWhiteShadow'>a</div>
            
          </div>
          </div>

          <div className='h-[20vh]'></div>

          
        </div>

        {/* right div  ------------------------------------------------------------------------------*/}
        <div className='w-[35%] py-10 grid grid-cols-1 grid-row-1 gap-10'>
          
          {/* progress div  */}
          <div className='w-full h-[45vh] rounded-2xl bg-[#1A2633] mastWhiteShadow flex flex-col justify-center items-center py-5 px-10'>
            <h1 className='text-3xl'>Overall Progress</h1>
            <div className='w-full h-[100%] flex justify-center items-center'>
              <div className='w-[200px] h-[200px] bg-white rounded-full flex justify-center items-center text-black'>a</div>
            </div>
            <p>"The secret of getting ahead is getting started."</p>
          </div>

          {/* projects div */}
          <div className='w-full h-[30vh] rounded-lg bg-[#1A2633] mastWhiteShadow overflow-y-scroll p-5 no-scrollbar'>
            <h1 className='text-2xl font-medium mb-5'>Projects</h1>
            <div className='grid grid-cols-1 grid-row-1 gap-3 '>
              {/* project 1 */}
              <div className='bg-black h-[70px] rounded-md flex justify-between items-center gap-5 p-3'>
                <div className=' w-full h-[50px] flex justify-start items-center gap-3'>
                  <div className='w-[50px] h-full bg-white rounded-lg'></div>
                  <h1>Project name</h1>
                </div>
                <button className='text-blue-400 w-[100px] h-[30px] rounded-sm'>View</button>
              </div>
              
              {/* project 2 */}
              <div className='bg-black h-[70px] rounded-md flex justify-between items-center gap-5 p-3'>
                <div className=' w-full h-[50px] flex justify-start items-center gap-3'>
                  <div className='w-[50px] h-full bg-white rounded-lg'></div>
                  <h1>Project name</h1>
                </div>
                <button className='text-blue-400 w-[100px] h-[30px] rounded-sm'>View</button>
              </div>

            </div>
          </div>

          {/* achivements  */}
          <div className='w-full h-[30vh] rounded-lg bg-[#1A2633] mastWhiteShadow overflow-y-scroll p-5 no-scrollbar'>
            <h1 className='text-2xl font-medium mb-5'>Achivement</h1>
            <div className='grid grid-cols-3 grid-row-3 gap-3 '>

              <div className='bg-black h-[140px] rounded-md flex flex-col justify-center items-center p-3 gap-1'>
                <div className='bg-white w-[60px] h-[60px] rounded-md'></div>
                <p>Good Job</p>
              </div>

              <div className='bg-black h-[140px] rounded-md flex flex-col justify-center items-center p-3 gap-1'>
                <div className='bg-white w-[60px] h-[60px] rounded-md'></div>
                <p>Good Job</p>
              </div>

              <div className='bg-black h-[140px] rounded-md flex flex-col justify-center items-center p-3 gap-1'>
                <div className='bg-white w-[60px] h-[60px] rounded-md'></div>
                <p>Good Job</p>
              </div>

              <div className='bg-black h-[140px] rounded-md flex flex-col justify-center items-center p-3 gap-1'>
                <div className='bg-white w-[60px] h-[60px] rounded-md'></div>
                <p>Good Job</p>
              </div>

            </div>
          </div>

        </div>

        </div>
    </>
  )
}

export default Dashboard
