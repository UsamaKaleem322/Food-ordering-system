import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import './style.scss'
const DescriptionBar = ({title,desc,path}) => {
  const navigate=useNavigate()
  return (
    <div className='categoryBar mx-2'>
    <div className='firstCol'>
      <h4>{title}</h4>
      <p>{!!desc}</p>
    </div>
    <div >
      <button className='btn btn-outline-light' onClick={() => navigate(`/${path&&path}`)}>View All <FaArrowRightLong className='icon' /></button>
    </div>
  </div>
  )
}

export default DescriptionBar