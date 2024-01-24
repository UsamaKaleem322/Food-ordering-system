import React from 'react'
import Carousel from './Carousel/carousel'
import { Container } from 'react-bootstrap'
import HomeCategories from './Categories/HomeCategories'
const home = () => {
  return (
    <Container fluid className='px-md-5 py-4'>
      <Carousel/>
      <HomeCategories/>
    </Container>
  )
}

export default home