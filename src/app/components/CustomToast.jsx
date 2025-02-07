import React, { useEffect } from 'react'
import { FaRegCircleXmark } from "react-icons/fa6";
import { BiSolidError } from "react-icons/bi";
const CustomToast = ({message,type,onClose}) => {
    console.log(type,"message90",onClose)
    useEffect(() => {
        const timer = setTimeout(() => {
          onClose(false);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [message, onClose]);
  return (
   

<div id="toast-success" className={`flex justify-between border-solid ${type=="error"?"border-rose-500":"border-green-400"} border-l-[3px] items-center w-full max-w-xs p-3 mb-4 min-w-[250px] text-gray-500 bg-lightgray rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 transition-all ease-in-out duration-150`} role="alert">
    <div className='flex gap-3 items-center'>
    <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8  ${type=="error"?"text-rose-500 bg-rose-50":"text-green-500 bg-green-100 "} rounded-lg dark:bg-green-800 dark:text-green-200`}>
        {type==="error"?
        <BiSolidError/>
        :
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>}
      
    </div>
    <div className="text-sm font-normal text-white">{message}!</div>

    </div>
    <button type="button" data-dismiss-target="#toast-success" aria-label="Close">
      
        <FaRegCircleXmark onClick={()=>{onClose(false)}} className='text-white text-xl'/>
       
    </button>
</div>
  )
}

export default CustomToast


