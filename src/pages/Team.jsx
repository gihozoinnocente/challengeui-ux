import React from 'react';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';

const Team = () => {
  return (
    <div>
      <section id='team'>
        <h1 className='text-center text-[#F28500]  text-6xl py-16 font-bold'>Team</h1>

        <div class="grid grid-cols-4 gap-4 ml-[18%]">
          <div>
            <img className='rounded-full' src={image11} alt='Image' />

            <div className='py-8 pl-10 '>
              <h1 className='text-[#414141] font-semibold'>Elisabeth Be</h1>
              <h2 className='text-[#9F9F9F] font-semibold'>COO</h2>
            </div>
          </div>

          <div>
            <img className='rounded-full' src={image10} alt='Image' />
            <div className='py-8 pl-20 '>
              <h1 className='text-[#414141] font-semibold'>EAndree Wijaya</h1>
              <h2 className='text-[#9F9F9F] font-semibold'>CEO/CTO</h2>
            </div>
          </div>
          
          <div>
            <img className='rounded-full ml-[22%]' src={image12} alt='Image' />
            <div className='py-8 pl-24'>
              <h1 className='text-[#414141] font-semibold'>Sanjaya Wahono</h1>
              <h2 className='text-[#9F9F9F] font-semibold'>CFO</h2>
            </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Team;
