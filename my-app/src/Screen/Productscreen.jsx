import React from 'react'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap'

import {Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'
const mystyle = {
  width:"70%"
};


function Productscreen (){
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);

  if (!product) return null;

  return (
    <>
    <Link className='btn btn-dark my-3' to ='/product'>Go Back</Link>
    <Row>
      <Col md={8}>
        <Card style={mystyle}>
        <Image src={product.image} alt={product.name} fluid/>
        </Card>
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} đánh giá`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Giá:{product.price} VND</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Mô tả:{product.description}
            </ListGroup.Item>
        </ListGroup>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  Giá Tiền:
                </Col>
                <Col>
                  <strong>
                    {product.price} VND
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  Tình trạng:
                </Col>
                <Col>
                  <strong>
                    {product.countInStock > 0? 'Còn hàng':"Hết hàng"} 
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className='d-grid gap-2'>
              <Button className='btn btn-lg' type='button' disabled={product.countInStock===0}>Thêm vào giỏ</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default Productscreen