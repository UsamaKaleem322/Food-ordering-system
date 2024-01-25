import React from 'react'
import { MdPayment,MdAssuredWorkload } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

import '../style.scss'
const Deals = () => {
  return (
    <>
    <div className='last my-4'>
       <div className='first'>
          <MdPayment className='icon'/>
          <div className='content'>
            <p>Payment only online</p>
            <span>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</span>
          </div>
       </div>
       <div className='first'>
          <BiSolidOffer className='icon'/>
          <div className='content'>
            <p>New stocks and sales</p>
            <span>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</span>
          </div>
       </div>
       <div className='first'>
          <MdAssuredWorkload className='icon'/>
          <div className='content'>
            <p>Quality assurance</p>
            <span>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</span>
          </div>
       </div>
       <div className='first'>
          <TbTruckDelivery className='icon'/>
          <div className='content'>
            <p>Delivery from 1 hour</p>
            <span>Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.</span>
          </div>
       </div>
    </div>
    </>
  )
}

export default Deals