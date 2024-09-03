import React from 'react';
// import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/Youtube_logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import profile from '../../public/person1.jpg';



function Navbar() {
  return (
    <div className='flex justify-between px-6 py-2 w-[100%] fixed top-0 bg-white'>
      <div className='flex items-center space-x-4 text-xl'>
      <AiOutlineMenu />
       <img src={logo} alt='' className='w-28 cursor-pointer'></img>
      </div>

      <div className='flex w-[35%]  '>
        <div className='w-[100%] px-3 py-2 border rounded-l-full'>
          <input type='text' placeholder='Search'/>
          </div>
          <button className='px-4 py-2 border rounded-r-full bg-gray-100'><CiSearch /></button>

          <IoMdMic size={"42px"} className='ml-3 p-2 border rounded-full cursor-pointer hover:bg-gray-200 duration-200'/>
        </div>
      <div className='space-x-4  flex items-center '>
      <RiVideoAddLine  className='text-2xl' />
      <AiOutlineBell  className='text-2xl'/>
      {/* <Avatar src={profile} size="32" round={true}/> */}
      <img src={profile} alt=''  className='size-8 rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar
