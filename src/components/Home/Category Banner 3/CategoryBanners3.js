
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const CategoryBanners3 = () => {
  const navigate=useNavigate()
  return (
    <div className='categoryBanners mt-4'>
        <div className='first'>
          <p>Only This Week</p>
          <h4>We provide you the<br/> best quality products</h4>
          <span>Only this week. Don't miss...</span><br/>
          <button className="mb-3" onClick={()=>navigate('/shop')} >Shop Now <FaLongArrowAltRight /></button>
        </div>
        <div className='second'>
          <p>Only This Week</p>
          <h4>We provide you the<br/> best quality products</h4>
          <span>Only this week. Don't miss...</span><br/>
          <button className="mb-3" onClick={()=>navigate('/shop')}>Shop Now <FaLongArrowAltRight /></button>
        </div>
        <div className='third'>
          <p>Only This Week</p>
          <h3>We provide you the<br/> best quality products</h3>
          <span>Only this week. Don't miss...</span><br/>
          <button className="mb-3" onClick={()=>navigate('/shop')}>Shop Now <FaLongArrowAltRight /></button>
        </div>
     </div>
  )
}

export default CategoryBanners3