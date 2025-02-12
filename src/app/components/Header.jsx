"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
const Header = ({id}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  

    const menuItems =   [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact Us", href: "#contact" },
      ]
    
    
   
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
    const [isMobile, setIsMobile] = useState(() => {
      if (typeof window === "undefined") return false; 
      return window.innerWidth <= 991;
    });
  
  
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const checkScreenSize = () => setIsMobile(window.innerWidth <= 991);
        checkScreenSize(); 
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
      }
    }, []);
  
  
  
  
  return (
    <nav className="fixed w-full z-10  backdrop-blur-[20px]" style={{backgroundImage:"linear-gradient(45deg, black, red)"}}  >
      <div className="container m-auto sm:px-6 md:px-6 px-4 ">
        <div className="relative lg:flex lg:h-16 xl:h-16   lg:justify-around items-center xl:flex xl:justify-around">
          
          <div className="md:flex md:justify-between sm:flex sm:justify-between items-center sm:py-3 md:py-3">
            <div className="flex shrink-0 items-center">
             
            <Image src={"/logo12.png"} alt="" height={60} width={80}/>
            </div>
            <button
              type="button"
              className="relative text-white sm:right-4  items-center justify-center rounded-md p-2  hover:bg-gray-700 hover:text-white focus:outline-none sm:block md:block hidden"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu} 
            >              
              <svg
                className={`block size-6 `}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
             
            </button>
          </div>
            <div className={`${isMenuOpen && isMobile ? "block" : "hidden"} mr-14 lg:block xl:block`}>
              <div className="flex md:block sm:block  items-center md:pb-4 sm:pb-3 gap-3">
                {menuItems?.map((data,i)=>{
                  return(
                  <div key={i}>
                
                  <h3 key={i} className='sm:mt-3 md:mt-3 ' onClick={()=>{ setIsMenuOpen(false)}}>

                  <Link href={data?.href}   className="font-custom   p-2 font-normal text-base text-white">{data.name}</Link>
                  </h3>
                  
                  
                 </div>
                  )
                })}
                 
              </div>
            </div>

        </div>
      </div>
    </nav>
  )
}

export default Header
