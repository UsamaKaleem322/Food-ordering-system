import React from 'react'
import categories from '../../../Dummy-Data/categories.json'
import '../style.scss'
const HomeCategories = () => {
  return (
    <div className='categories my-5'>
         {categories.map((item)=>{
          return(
          <div className='card'>
            <img src={item.image} alt={item.name}/>
            <p>{item.name}</p>
          </div>
          )
         })}
    </div>
  )
}

export default HomeCategories