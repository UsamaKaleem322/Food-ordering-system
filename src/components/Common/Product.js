import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LiaStarSolid } from 'react-icons/lia'
import { RiStarSLine } from 'react-icons/ri'
import { BsCartCheck } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { PiBracketsSquareThin } from 'react-icons/pi'
import './style.scss'
const Product = ({product}) => {
  return (
    <>
    <div className='product'>
    <Card  >
        <Link to={'/' + product.id} className='link'>
          <Card.Img variant="top" src={product.image} className='img' />
          <div className="button">
            <button className='btn  btn-sm'  >{product.sale}%</button>
          </div>
          <div className="heart" >
            <span><AiFillHeart /></span>
          </div>
          <div className="focus">
            <span><PiBracketsSquareThin /></span>
          </div>
        </Link>
        <Card.Body>
          <Badge bg='success'>{product.stock? "IN STOCK":'OUT OF STOCK'}</Badge>
          <p >{product.category}</p>
          <Card.Title className='title'>{product.name.slice(0,40)}</Card.Title>
          <div className="d-flex justify-content-between">
            <div className="icons">
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <LiaStarSolid className='stars' />
              <RiStarSLine className='stars' />
            </div>
            <span color='gray'>4 on 3 reviews</span>
          </div>
          <div className="d-flex justify-content-between my-2">
            <Card.Title>${product.price}</Card.Title>
            <span ><BsCartCheck className='cart'  /></span>
          </div>
        </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Product