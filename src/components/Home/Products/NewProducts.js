import React from 'react'
import Product from '../../Common/Product'
import products from '../../../Dummy-Data/products.json'
import DescriptionBar from '../../Common/DescriptionBar'
import '../style.scss'
const Products = () => {
  return (
    <>
    <DescriptionBar title={"New Products"} desc={"Some of the new products arriving this  weeks"} path={"shop"}/>
      <div className='products my-3 mx-0'>
        {products.map(product=><Product product={product}/>).slice(0,6)}
      </div>
    </>

  )
}

export default Products