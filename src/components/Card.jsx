import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "motion/react";
const Card = ({data}) => {
  return (
    <motion.div drag  className=' relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-600/90 text-white px-5 py-8 overflow-hidden'>
        <IoDocumentTextOutline />
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0 '>
            <div className='flex items-center justify-between  py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5> 
                <span className=' w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center '>
                    {data.close ?<IoCloseCircleSharp />: <GoDownload  size=".7em" color='#000'/>}
                   
                </span>
            </div>
            {
                data.tag.isOpen &&(
                    <div className={`tag w-full py-4 ${ data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold  '> {data.tag.tagTitle}</h3>
                  </div>
                ) }
           
        </div>
    </motion.div>
  )
}

export default Card
