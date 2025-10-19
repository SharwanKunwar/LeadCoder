import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'

function ConceptCatalog() {
  return (
    <MainLayout>
      <div className='h-[88%]'>
        <div className=' h-[50px] flex justify-between items-center my-5'>
          <h1>Showing 6 concepts</h1>
          <div className='flex gap-3'>
            <button>view</button><button>view</button>
          </div>
        </div>
        <div className='grid grid-cols-3 grid-row-3 gap-5'>
          <div className='bg-white h-[200px] rounded-md'>card</div>
          <div className='bg-white h-[200px] rounded-md'>card</div>
          <div className='bg-white h-[200px] rounded-md'>card</div>
          <div className='bg-white h-[200px] rounded-md'>card</div>
          <div className='bg-white h-[200px] rounded-md'>card</div>
          <div className='bg-white h-[200px] rounded-md'>card</div>
        </div>

        <div className=' h-[60px] flex justify-center items-center'>1 2 3 4 ....</div>
          
      </div>
    </MainLayout>
  )
}

export default ConceptCatalog
