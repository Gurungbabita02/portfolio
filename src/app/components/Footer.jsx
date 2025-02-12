import React from 'react'
import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
  const footerData=[
    {heading:"Address",icon:<IoLocationOutline className='text-[30px] text-white sm:text-[24px] md:text-[26px]'/>,paragraph:"Tdi City sector 118 Mohali India"},
    {heading:"Let's Talk",icon:<IoCallOutline className='text-[30px] text-white sm:text-[24px] md:text-[26px]'/>,paragraph:"+918894176637"},
    {heading:"Send us Email",icon:<MdOutlineMail className='text-[30px] text-white sm:text-[24px] md:text-[26px]'/>,paragraph:"babita.grg121@gmail.com"}
  ]
  return (
    <footer className='py-20  bg-[#2c2c2c] md:px-5'>
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-5 sm:px-5 container mx-auto '> 
          {footerData.map((data,i)=>{
            return(
        <div key={i} className='flex gap-5'>
         <div className='h-[60px] w-[60px] md:h-[55px] md:w-[55px] md:p-[14px]  sm:h-[50px] sm:w-[50px] sm:p-3 rounded-full bg-red p-[14px]'>
          {data.icon}
         </div>
        <div>
          <h3 className='text-xl font-medium text-white'> {data.heading}</h3>
          <p className='text-gray-400 text-lg sm:text-sm'>{data.paragraph}</p>
        </div>
        </div>
            )
          })}
        </div>
    </footer>
  )
}

export default Footer
