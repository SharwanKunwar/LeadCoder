
import { Checkbox } from 'antd';
import Radio from 'antd/es/radio/radio';
import { Button } from "antd";
import { useState } from 'react';

function Sidebar() {

  const [radioValue, setRadioValue] = useState("Beginner");

  return (
    <>
      <div className='bg-[#182430] h-[70vh] rounded-xl grid grid-cols-1 grid-row-1 gap-2 py-2 p-5 mastBrightShadow'>

        {/* top searchbar and heading  */}
        <div className=' h-[10vh] flex flex-col justify-center gap-3'>
          <h1 className='font-medium'>Find Concepts</h1>
          <div className="bg-[#233648] rounded-lg w-full h-[35px] flex justify-start items-center  mastBrightShadow focus-within:border border-white">
                    <div className=" rounded-full pl-2 w-[50px] h-[50px] flex justify-center items-center"><i className="ri-search-line text-[#8B8D93"></i></div>
                    <div>
                        <input type="text" placeholder='Search' className='border-none outline-none'/>
                    </div>
                </div>

        </div>

        {/* Categories  */}
        <div className=' h-[25vh] flex flex-col justify-between gap-2 font-medium py-3'>
          <h1 className='mb-1 font-bold'>Categories</h1>
          <Checkbox className=' !text-white custom-checkbox' >Fundamentals</Checkbox>
          <Checkbox className=' !text-white custom-checkbox' >Data Structures</Checkbox>
          <Checkbox className=' !text-white custom-checkbox' >Algorithms</Checkbox>
          <Checkbox className=' !text-white custom-checkbox' >OOP</Checkbox>
          <Checkbox className=' !text-white custom-checkbox' >Web Development</Checkbox>

        </div>

        {/* Difficulty Level */}
       <div className=" flex flex-col gap-3 text-white font-medium py-3">
          <h1 className="text-lg font-bold">Difficulty Level</h1>
              <Radio.Group
                onChange={(e) => setRadioValue(e.target.value)}
                value={radioValue}
                className="!flex !flex-col !gap-1"
              >
                <Radio className="custom-radio !text-white" value="Beginner">
                  Beginner
                </Radio>
                <Radio className="custom-radio !text-white" value="Intermediate">
                  Intermediate
                </Radio>
                <Radio className="custom-radio !text-white" value="Advanced">
                  Advanced
                </Radio>
              </Radio.Group>

        </div>


        <Button className='bg-[#163450] font-medium mx-5 my-1 p-2 rounded-md'>Clear Filters</Button>
      </div>
    </>
  )
}

export default Sidebar
