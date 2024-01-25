import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import products from '../../Dummy-Data/products.json'
import './style.scss'
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import { FaCartPlus } from "react-icons/fa6";

const SingleProduct = () => {
  const { id } = useParams()
  const product = products.filter(item => item.id == id)
  console.log(product[0].name);
  return (
    <Container className='product my-3'>
      <Row>
        <Col md={6} className='left'>
          <img src={product[0].image} alt={product[0].name} />
        </Col>
        <Col md={6} className='right my-md-5'>
          <h6>{product[0].name}</h6>
          <div className="d-flex icons my-3">
            <div className="">
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <RiStarSLine className='stars' />
            </div>
            <button className='mx-3'>4:00</button>
            <p>SKU : <span>K0L1M2N3</span></p>
          </div>
          <p className='desc'>{product[0].desc}</p>
          <p className='price'>${product[0].price}</p>
          {/* <button className='whatsapp my-3'>Order on WhatsApp</button> */}
          <div className='time my-3'>
             <p className=''>Special Offer :</p>
             <button className='mx-2'>81</button>
             <button className='mx-2'>10</button>
             <button className='mx-2'>45</button>
             <span>:</span>
             <button className='mx-2'>13</button>
             <span>Remains until the end of the offer.</span>
          </div>
          <h4 className='m-0 '>Products are almost sold out</h4>
          <p className='m-0'>This product is about to run out</p>
          <Form.Range className='m-0'/>
          <p className='m-0 stock'>{product[0].stock?"In Stock":'Out of Stock'} </p>
          <button className='whatsapp my-3'><FaCartPlus/> Add to Cart </button>

        </Col>
      </Row>
    </Container>
  )
}

export default SingleProduct