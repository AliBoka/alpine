import React from 'react'
import glossier from '../assets/Glossier-logo.png'
import Aspire from '../assets/Aspire-logo.png'
import nylas from '../assets/nylas-logo.png'
import bitwise from '../assets/bitwise-logo.png'
import user1 from '../assets/img1.png'
import user2 from '../assets/img2.png'
import user3 from '../assets/img3.png'
import symmetric from '../assets/symmetric-logo.png'
import digital from '../assets/Digital-logo.png'
import envie from '../assets/envie-logo.png'
const Bottom = () => {
  return (
    <div className='flex flex-col  mx-8 md:mx-28  xl:mx-36 mt-8 px-6'>
        <div className='flex justify-between items-center w-full'>
            <img src={glossier} alt="glossier-logo" />
            <img src={Aspire} alt="Aspire-logo" />
            <img src={nylas} alt="nylas-logo" />
            <img src={bitwise} alt="bitwise-logo" />
        </div>
        <div className='flex justify-between items-center pb-20'>
            <div className='flex flex-col mx-4'>
                <div className="flex items-center">
                <img src={user1} alt="user1" className='mr-3' />
                <img src={symmetric} alt="symmetric-logo" />
                </div>
            <p className="text-sm xl:text-lg font-bold text-justify mt-3 px-2">The AMA’s definitions of marketing and marketing research are reviewed and reapproved/modified every three-years by a panel of five scholars who are active researchers.</p>
            </div>
            <div className='flex flex-col mx-4'>
                <div className="flex items-center">
                <img src={user2} alt="user1" className='-mr-8' />
                <img src={digital} alt="digital-logo" />
                </div>
            <p className="text-sm xl:text-lg  text-justify mt-3 font-bold px-2">The AMA’s definitions of marketing and marketing research are reviewed and reapproved/modified every three-years by a panel of five scholars who are active researchers.</p>
            </div>
            <div className='flex flex-col mx-4'>
                <div className="flex items-center">
                <img src={user3} alt="user3" className='mr-3' />
                <img src={envie} alt="envie-logo" />
                </div>
            <p className="text-sm xl:text-lg  text-justify mt-3 font-bold px-2">The AMA’s definitions of marketing and marketing research are reviewed and reapproved/modified every three-years by a panel of five scholars who are active researchers.</p>
            </div>
        </div>
    </div>
  )
}

export default Bottom