import React, { useState } from 'react'
import Card from './Card';
import { motion } from "motion/react";

const Foreground = () => {
    // const data =[
    //     desc ,filesize, closeordownload, tagdetails 
    // ]
    const data =[
        {desc: "adipisicing Lorem ipsum dolor sit amet consectetur." ,
            filesize: ".9mb",
            close:true,
            tag:{isOpen:true, tagTitle: "Download Now",
                tagColor: "green"},
        },
        {desc: "adipisicing Lorem ipsum dolor sit amet consectetur." ,
            filesize: ".9mb",
            close:true,
            tag:{isOpen:false, tagTitle: "Download Now",
                tagColor: "blue"},
        },
        {desc: "adipisicing Lorem ipsum dolor sit amet consectetur." ,
            filesize: ".9mb",
            close:true,
            tag:{isOpen:true, tagTitle: "Download Now",
                tagColor: "green"},
        },
    ];
  return (
    <div className=' fixed z-[3] left-0 top-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map ((item,index) =>(
            <Card data={item}/>
        ))}
      
    </div>
  )
}

export default Foreground
