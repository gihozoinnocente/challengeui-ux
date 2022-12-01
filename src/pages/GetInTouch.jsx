import React from 'react'
import contact from '../assets/contact.png';
import location from '../assets/location.png';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from  "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const GetInTouch = (props) => {

  return (
    <div>
      <section id='getInTouch'>
     <div className='bg-[#D9D9D9]'>
     <div>
          <img className='ml-[50%] h-full' src={contact} alt='Image' /></div>
        <div className='bg-[#FFF] h-60 w-80 ml-96 z-[-1] mt-[-25%] py-4 px-7'>
          <h1 className='text-[#F28500] font-semibold text-2xl'>Contact Us</h1>
          <p className='pt-5 pb-5'>Let's discuss what projects you have in mind</p>
          <button className='bg-[#000000] text-[#FFF] py-4 px-4'>Let's Have a Coffee</button>
        </div>
     </div>
        <div className='bg-[#D9D9D9] flex py-14 px-20 pl-[15%] '>
          <div>
            <h4 className='py-5 font-semibold'>Location</h4>
            <div><img className='h-60 w-4/5' src={location} alt='Image' /></div>
          </div>
          <div className=' ml-10'>
            <h4 className='py-10 font-semibold'>Get In Touch</h4>
            <div className='flex flex-col gap-2'>

              <div className='flex'>
                <FaPhoneAlt size='2rem' className='mr-5 flex 
                    justify-center items-center' />
                <p>0788 xxx xxx</p>
              </div>

              <div className='flex'>
                <FaRegEnvelope size='2rem' className='mr-5 flex 
                    justify-center items-center' />
                <p>email@flex.com</p>
              </div>


              <div className='flex'>
                <FaFacebookF size='2rem' className='mr-5 flex 
                    justify-center items-center' />
                <p>@flex.com</p>
              </div>

              <div className='flex'>
                <FaInstagram size='2rem' className='mr-5 flex 
                    justify-center items-center' />
                <p>@flex.com</p>
              </div>

              <div className='flex'>
                <FaTwitter size='2rem' className='mr-5 flex 
                    justify-center items-center' />
                <p>@flex.com</p>
              </div>

            </div>
          </div>
        </div>

        <div className='bg-[#F28500]  text-[#FFF]  w-full py-10 pl-24'>
          <h1 className='font-bold text-6xl py-0'>Flex</h1>
          <p className=''>platforms</p>
        </div>
      </section>
    </div>
  )
}

export default GetInTouch;
