import React from 'react';
import product from '../assets/Rectangle.png';

const OurSolutions = () => {
  return (
    <div>
      <section id='oursolutions' className='bg-gray-50'>
        <h1 className='text-center text-[#F28500]  text-6xl py-10 font-bold '>Our Products</h1>
        <img className='ml-[13%]' src={product} alt='Product' />

        <div className='ml-[20%] flex mr-[20%]'>
          <div className='text-center'>
            <h1 className='text-[#414141] font-semibold'>FlexGo</h1>
            <p className='text-center'>All things are designed.A few things are designed well.
              We try to elevate your ideas with great UI/UX design,
              suited to your taste,addressing the right pain points.
            </p>
          </div>

          <div className='text-center'>
            <h1 className='text-[#414141] font-semibold'>Konvey</h1>
            <p className='text-center'>All things are designed.A few things are designed well.
              We try to elevate your ideas with great UI/UX design,
              suited to your taste, addressing the right pain points. </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurSolutions;
