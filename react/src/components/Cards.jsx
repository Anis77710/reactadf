import { Bookmark } from "lucide-react";


import React from 'react'

const Cards = (props) => {
  return (
    <>
        
        <div className='h-72 w-60 p-4 mb-1 bg-white rounded-2xl flex flex-col justify-between'>
            <div className='top flex justify-between '>
                <img className='h-10 w-10 rounded-[50%] border-2 border-amber-700 object-cover' src={props.logo} alt="not found" />
                <div className='bg-white gap-1 border h-6 text-[10px] text-black  flex items-center rounded-[7px] px-2'>
                  <h2>save</h2>
                  <Bookmark size={10}/>
                  
                </div>
            </div>
            <div className="center">
              <h3 className='font-bold'>{props.company} <span className='text-[10px] font-medium'>{props.posted}</span></h3>
              <h2 className='font-bold text-[18px]'>{props.position}</h2>
              <div className='flex gap-2'>
                <h3 className='text-[13px] capitalize px-3 py-2 bg-amber-200 rounded-[12px]'>{props.employmentType}</h3>
                <h3 className='text-[13px] capitalize px-3 py-2 bg-amber-200 rounded-[12px]'>{props.level}</h3>
              </div>
            </div>
            <div className="bottom flex justify-between">
              <div>
                <h3 className='text-[16px] font-bold'>{props.rate}</h3>
                <h5 className='text-[12px] font-medium'>{props.location}</h5>
              </div>
              <button className='px-2 text-[13px] text-white bg-black rounded-[12px]'>Apply Now</button>
            </div>
        </div>
    </>
  )
}

export default Cards