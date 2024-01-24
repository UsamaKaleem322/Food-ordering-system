import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../style.scss'
const carousel = () => {
  return (
    
    <Carousel className='carousel'>
      <Carousel.Item interval={1500}>
        <img src='/Images/banner1.png' alt='...'/>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
      <img src='/Images/banner2.png' alt='...'/>
      </Carousel.Item>
    </Carousel>
  )
}

export default carousel