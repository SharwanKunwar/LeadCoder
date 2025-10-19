import React from 'react'

function Sidebar() {
  return (
    <>
      <div className='bg-[#182430] rounded-xl grid grid-cols-1 grid-row-1 gap-3 py-2 p-2 mastWhiteShadow'>
        <div className='bg-red-400 h-[15vh]'>a</div>
        <div className='bg-red-400 h-[24vh]'>a</div>
        <div className='bg-red-400 h-[20vh]'>a</div>
        <button className='bg-[#163450] font-medium mx-5 my-1 p-2 rounded-md'>Update</button>
      </div>
    </>
  )
}

export default Sidebar
