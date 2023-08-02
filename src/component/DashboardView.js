import React, { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch } from 'react-icons/fa'
import profile from '../profile-picture.webp';
import Main from './Main';

function DashboardView() {
    const [open,setOpen] = useState(false)

    const handleProfile = () =>{
        setOpen(!open)
    }
  return (
    <>
        <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
            <div className='flex items-center rounded-[5px]'>
                <input type='text' className='bg-[#f8f3f3] h-[40px] outline-none pl-[13px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search...'/>
                <div className='bg-[#4e49dd] h-[40px] px-[14px] flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]'>
                    <FaSearch color='white'/>
                </div>
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                    <FaRegBell/>
                    <FaEnvelope/>
                </div>
                <div className='flex items-center gap-[15px] relative' onClick={handleProfile}>
                    <p>Awadhesh Yadav</p>
                    <div className='h-[50px] w-[50px] rounded-full bg-[#4E73Df] cursor-pointer flex item-center justify-center relative'>
                        <img src={profile} alt="prfile" className='rounded-full'/>
                    </div>
                    {  open && 
                        <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-150px] z-20 right-0 pt-[15px] pl-[15px]  items-center justify-center'> 
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Setting</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Logout</p>
                        
                        </div>

                    }
                </div>
            </div>
        </div>
        <Main/>
    </>
  )
}

export default DashboardView
