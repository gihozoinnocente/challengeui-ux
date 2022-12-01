import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const OurPartners = () => {
    return (
        <div>
            <section id='ourpartners'>
                <h1 className='text-center text-[#F28500] text-6xl py-16 font-bold '>Our partners</h1>
                {/* <div className='grid-cols-4	'>
                   
                </div> */}

                <div class="grid grid-cols-4 gap-4">
                    <div><img className='ml-[25%]' src={image1} alt='Image' /></div>
                    <div><img className='ml-[13%]' src={image2} alt='Image' /></div>
                    <div><img className='ml-[13%]' src={image3} alt='Image' /></div>
                    <div><img className='ml-[13%]' src={image4} alt='Image' /></div>

                </div>
            </section>
        </div>
    )
}

export default OurPartners;
