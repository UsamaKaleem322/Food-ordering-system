import React from 'react'
import '../style.scss'
import { useNavigate } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa';
const CategoryBanners2 = () => {
  const navigate=useNavigate();
  return (
    <div className='categoryBanners2 mt-4 mx-0'>
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
     </div>
  )
}

export default CategoryBanners2