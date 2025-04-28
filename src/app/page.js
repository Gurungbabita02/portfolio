"use client"
import Image from "next/image";
import asign_girl from "../../public/asian_girl.jpg"
import social_media from "../../public/socialmedia.png"
import ai_img from "../../public/ai.jpg"
import work_img from "../../public/work_4.jpg.webp"
import { FaRegBuilding } from "react-icons/fa";
import { IoLocationOutline,IoLocationSharp,IoCallSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaUniversity,FaDesktop } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosSend ,IoMdMail} from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { CgSupport } from "react-icons/cg";
import CustomToast from "./components/CustomToast";
import almuqeet_bg from "../../public/ussd_gateway.png"
import { toast, ToastContainer } from "react-toastify";
export default function Home() {


 useEffect(()=>{
  AOS.init();
 },[])

const [userData,setUserData]=useState({firstName:"",lastName:"",email:"",number:"",messages:""})

const [loading, setLoading] = useState(false);

const handleChange=(e)=>{
  setUserData({...userData,[e.target.name]:e.target.value})
}

const sendHandler=()=>{

  if (
    Object.keys(userData).length > 0 && 
    Object.values(userData).every(value => value !== null && value !== "" && value !== undefined)
  ){
    setLoading(true)
  fetch("/api/signup",
      {body:JSON.stringify(userData),
      headers:{
      "Content-Type":"application/json"
      },
    method:"POST"}).then((res)=>{
   
      if(res.status===201){
        setLoading(false)
        toast.success("Data submitted successfully!")
      }else{
        setLoading(false)
        toast.error(res.statusText)
     
      }
    })
    .catch((err)=>{
      toast.error(err)
      setLoading(false)
    })
    setUserData({firstName:"",lastName:"",email:"",number:"",messages:""})
  }



}

      const services=
      [
      {title:"Clean Code",icon:<FaCode/>,subheading:"Writing code that is well structured, readable and maintainable .It involves follwing coding best pratices."},
      {title:"User Inerface",icon:<FaDesktop />,subheading:"Creaing initiative and user friendly designs that priortize usability ,accessbility and a seamless user experience."},
      {title:"Fast Support",icon:<CgSupport/>,subheading:"Addressing and resolving user reported issues or inquiries related to the website and application "},
      {title:"Creative Design",icon:<MdOutlineDesignServices/>,subheading:"Leveraging artisitic element and aesthetic principles to craft visually appealing and engaging user experiences. "},
      {title:"User Experience",icon:<GrUserExpert/>,subheading:"Understanding user behaviour ,needs and prefrences to create interfaces that are initiative,efficinet and enjoyable to use."},
    ]
    
      const skills=
      [{title:"HTML5",percentage:"70"},{title:"CSS3",percentage:"85"},{title:"React",percentage:"90"},
      {title:"Bootstrap5",percentage:"98"},{title:"Tailwind Css",percentage:"85"},{title:"Responsive Design",percentage:"100"}
      ]

      const education=
      [{title:"Bachelor of computer applications",unvName:"Himachal Pradesh University",year:"March 2019 - June 2022"},
        // {title:"Higher Secondary Education",unvName:"HP.Board Dharamshala",year:"Jan 2018 - March 2019"},
      ]
      const jobData=
      [{title:"Frontend Developer",location:"Bestech Business Tower Sector 66 Mohali Punjab (India)",year:"Dec 2024 - Present",jobType:"Full Time",companyName:"Almuqeet Systems"},
        {title:"Frontend Developer",location:"TDI City Mohali Punjab (India)",year:"Jan 2023 - Sep 2024",jobType:"Full Time",companyName:"Ultivic Pvt Ltd"},
        {title:"Full Stack Developer",location:"TDI City Mohali Punjab (India)",year:"June 2023 - Dec 2023",jobType:"Intership",companyName:"Omninous Solutions"},
       
      ]
      const contactInfo=[{title:"Tdi City Mohali Punjab Sector 118",icon:   <IoLocationSharp className="text-red"/>},
        {title:"babita.grg121@gmail.com",icon: <IoMdMail className="text-red"/>},
        {title:"+918894176637",icon: <IoCallSharp className="text-red"/>}
      ]
     const workData=[{title:"Quanti App",img:ai_img,href:"https://quanti.app"},{title:"Almuqeet Systems",img:almuqeet_bg,href:"https://web.asmsc.net"}]
  return (
    <section className="relative">
      <div className="h-screen w-full flex justify-center items-center bg-[url('/hero_2.jpg.webp')] bg-fixed">
      <div className="">
      <h2 className="text-white text-[70px] font-semibold text-center sm:text-[40px]  md:text-[44px] sm:text-xl"> I'm Babita Gurung <br></br> A Fronted Developer</h2>
      <h3 className="text-white text-2xl sm:text-xl sm:pt-3" >Find Me On</h3>
  
      <ul className="flex gap-4 pt-6 sm:pt-3">
        <li className="text-white bg-lightgray rounded-lg p-4 text-base"><FaFacebookF /></li>
        <li className="text-white bg-lightgray rounded-lg p-4 text-base"><FiInstagram /></li>
        <li className="text-white bg-lightgray rounded-lg p-4 text-base"><FaLinkedinIn /></li>
      </ul>
      <div className="mt-14">
      <a href="#contact" className="bg-gradient-to-bl from-red to-lightgray text-base rounded-lg px-6 py-3 text-white sm:text-sm sm:px-[14px] sm:py-[10px]" >Contact Me</a>

      </div>
      </div>
      </div>
      {/* <Aboutpage/> */}
    
      <div className="bg-black">
     <div className="container mx-auto pb-20 sm:pb-10 sm:px-6 md:px-6 px-4">
      <div data-aos="zoom-in" data-aos-duration="2000" id="about"  className=''>
            <div className='grid grid-cols-2 sm:grid-cols-1 py-12'>
              <Image src={asign_girl} alt='asian_girl' className='w-full  h-[500px] object-contain sm:px-6' />
              <div className='p-5'>
                  <h3 className='text-[34px] sm:text-3xl font-semibold text-red relative line'>My Bio</h3>
                  <p className='text-lg pt-3 text-white font-medium '>
                  As a passionate Frontend Developer, I specialize in crafting responsive, user-friendly websites and applications that
                   provide seamless experiences across all devices. With a strong foundation in HTML, CSS, and JavaScript, I have expertise
                  in modern frontend frameworks and libraries such as React. 
                  My goal is to blend creativity with technical proficiency to build engaging user interfaces that not only look great but also perform efficiently.
                  </p>
                  <ul className='mt-4  text-gray2'>
                    {skills?.map((data,ind)=>{
                      return(
                      <li key={ind}><h3 className="text-xl font-medium py-2">{data?.title}</h3>
                   
                      <div className="relative w-full bg-gray-200 rounded-full h-[5px] dark:bg-gray-700 group  cursor-pointer">
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-[70%]  bg-white text-lightgray text-sm px-2 py-1  rounded opacity-0  group-hover:opacity-100 transition-opacity">
                          {data.percentage}%
                        </div>
                      <div className={"bg-red h-[5px] rounded-full"} style={{ width: `${data.percentage}%` }}></div>
                      </div>
                      </li>
                      )
                    })}
                     
                      
                  </ul>
                  <div className="mt-6">
                  <a className='bg-gradient-to-bl from-red to-lightgray px-7 py-[6px] text-lg text-white rounded-lg ' href="#contact">Hire Me</a>

                  </div>
              </div>
            </div>
          </div>

          {/* portfolio */}
          <div data-aos="fade-down" data-aos-duration="2000"   className =''>
            <div className="flex justify-center">
         

            </div>
            <h3 className="text-red font-semibold text-[40px] sm:text-[26px] text-center relative line">Latest Works</h3>
             <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 pt-14">
 
                {workData.map((data,i)=>{
                  return(

              <div key={i} className="relative portfolio_container rounded-lg overflow-hidden hover:scale-[1.05] transition-all ">
                <Image src={data.img} alt="work_img" className="h-full object-cover "/>
                <div className="content">
                  <a href={data.href}  className="text-white text-lg font-medium cursor-pointer">{data.title}</a>
                </div>
              </div>
                  )
                })}
              
             </div>
          </div>

          {/* services */}

          <div className='' id="services">
          <h3 className="text-red font-semibold text-2xl text-center sm:mt-3 md:mt-6"> 
         Services</h3>
          <h4 className="text-center text-[40px] font-semibold text-red relative line sm:text-[26px]">What Can I Do</h4>
          
       <div className="p-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {services?.map((data,i)=>{
        return(
         <div key={i}  className="bg-gradient-to-bl from-red to-lightgray rounded-xl p-6 sm:p-3" >
         <h2 className="text-3xl flex justify-center text-red"> {data.icon}</h2>
           <h4 className="text-2xl text-center pt-3 font-bold text-white sm:text-[20px] ">{data.title}  </h4>
          
           <p className="text-lg text-center pt-3 font-semibold text-gray2 sm:text-sm">{data.subheading} </p>
           
         </div>

        )
        })}
      </div>
       
          </div>
    
          {/* resume */}
          <div className="mt-6"  data-aos-duration="3000" >
          <h3 className="text-center font-semibold text-[40px] sm:text-[26px] text-red relative   line"> My Resume</h3>
          <div className="grid grid-cols-12 gap-5 py-10">
            <div className="col-span-5 sm:col-span-12">
            <Image src={asign_girl} alt='asian_girl' className='w-full h-[500px] sm:h-full object-contain' />
            </div>
            <div className="col-span-7 sm:col-span-12">
            <h4 className="text-[26px] font-semibold text-white">Work Experience</h4>

              <ul className="">
                {jobData?.map((data,i)=>{
                  return(
                <li key={i} className="flex sm:flex-wrap justify-between border-b border-solid border-red py-5 items-center">
                  <div>
                    <h4 className="text-lg font-medium text-white"> {data.title} </h4>
                    <h5 className="text-sm text-gray2 font-semibold flex gap-2 items-center pt-2"> <FaRegBuilding /> {data.companyName}</h5>
                    <h5 className="text-sm text-gray2 font-semibold flex gap-2 items-center pt-2"> <IoLocationOutline /> {data.location}</h5>
                  </div>
                  <div>
                    <h3 className="text-white bg-red rounded-full px-4 py-1 w-fit sm:mt-3">{data.jobType}</h3>
                    <h5 className="text-sm text-gray2 font-semibold flex gap-2 items-center pt-2"> <SlCalender /> {data.year}</h5>
                  </div>
                </li>

                  )
                })}
                
              </ul>

              <h4 className="text-[28px] sm:text-2xl font-semibold text-white pt-5">Education</h4>
              <ul className="">
                {education?.map((data,i)=>{
                  return(
                <li key={i} className="flex sm:flex-wrap justify-between border-b border-solid  border-red py-5 items-center">
                  <div>
                    <h4 className="text-lg font-medium text-white"> {data?.title} </h4>
                    <h5 className="text-sm text-gray2 font-semibold flex gap-2 items-center pt-2"> <FaUniversity /> {data?.unvName}</h5>
                    <h5 className="text-sm text-gray2 font-semibold flex gap-2 items-center pt-2"> <SlCalender />{data?.year}</h5>
                  </div>
                  
                </li>

                  )
                })}
             
              </ul>
            </div>
          </div>
          </div>
      {/* contact section */}
      <div className="" id="contact" >
        <h3 className="text-[40px] sm:text-[26px] text-center font-medium text-red">Contact Me</h3>
        <div className="grid grid-cols-2 pt-10 sm:grid-cols-1 sm:pt-1">
          <div >
            <form>
              <div className="flex  gap-7 sm:block md:block">
              <div className="pt-5 flex-1">
                <label className="text-red font-semibold text-xl">First Name</label>
                <input value={userData.firstName} onChange={(e)=>{handleChange(e)}} name="firstName" required type="text" className="p-3 mt-2 rounded-lg w-full border-b-2 border-black border-solid  focus:transition-all focus:border focus:border-solid focus:border-red focus:shadow-shadow3"/>
              </div>
              <div className="pt-5 flex-1">
                <label className="text-red font-semibold text-xl">Last Name</label>
                <input value={userData.lastName} onChange={(e)=>{handleChange(e)}} name="lastName" required type="text" className="p-3 mt-2 rounded-lg w-full border-b-2 border-black border-solid  focus:transition-all focus:border focus:border-solid focus:border-red focus:shadow-shadow3" />
              </div>

              </div>
              <div className="pt-5">
                <label className="text-red font-semibold text-xl">Email Address</label>
                <input value={userData.email} onChange={(e)=>{handleChange(e)}} name="email" required type="email" className="p-3 mt-2 rounded-lg w-full border-b-2 border-black border-solid  focus:transition-all focus:border focus:border-solid focus:border-red focus:shadow-shadow3"/>
              </div>
              <div className="pt-5">
                <label className="text-red font-semibold text-xl">Phone Number</label>
                <input value={userData.number} onChange={(e)=>{handleChange(e)}} name="number" required type="number" className="p-3 mt-2 rounded-lg w-full border-b-2 border-black border-solid  focus:transition-all focus:border focus:border-solid focus:border-red focus:shadow-shadow3"/>
              </div>
              <div className="pt-5">
                <label className="text-red font-semibold text-xl">Message</label>
                <textarea value={userData.messages} onChange={(e)=>{handleChange(e)}} name="messages" rows={7} className="w-full border-b-2  rounded-lg border-black focus:border focus:border-solid focus:border-red focus:transition-all focus:shadow-shadow3"/>
              </div>
              <button onClick={sendHandler} className="bg-gradient-to-bl from-red to-lightgray sm:p-2  p-3 cursor-pointer justify-center text-white rounded-lg text-lg mt-5 flex  w-[200px] items-center">
                
             {loading? <div className="w-8 h-8 rounded-full animate-spin border-2 border-dashed border-lightpink border-t-transparent"></div>:
             <h3 className="flex items-center gap-3"> Send Message <IoIosSend className="text-2xl"/> </h3>
             }
             </button>
            </form>
          </div>
          <div  className="px-10 py-5 sm:px-0">
            <h3 className="text-3xl text-white sm:text-2xl">Contact Info</h3>
            <ul className=" pt-5 sm:pt-0 text-lg sm:text-base text-gray2">
              {contactInfo.map((data,i)=>{
                return(
              <li className="flex gap-3 items-center pt-4" key={i}>
                {data.icon}
           
                <h3>{data.title}</h3>
              </li>

                )
              })}
             
            </ul>
          </div>
        </div>
      </div>

     </div>
      </div>
      <ToastContainer/>
    </section>
  );
}
