import React from 'react'

function DiscusCard() {
  return (
    <>
        <div className='mt-10 p-4 w-full bg-white rounded-md text-black font-medium'>
            <h1 className='mb-2'>Discussion</h1>
            <p className='text-[13px] text-neutral-500'>What are some other data types in this language? Share an example of how you've used a variable.</p>
            <textarea className='w-full bg-gray-400 my-3 rounded-md h-[100px] p-2'/>
            <button className='bg-indigo-400 py-1.5 w-full rounded-lg text-white font-medium'>Post Comment</button>
        </div>
    </>
  )
}

export default DiscusCard
