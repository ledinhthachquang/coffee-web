import React from 'react'
import {Row,Col} from 'react-bootstrap'
import products from '../products'
import Coffee from '../components/Coffee/Coffee'
const productpage = () => {
  return (
    <>
        <h1>Sản phẩm mới nhất</h1>
        <Row>
            {products.map(product =>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Coffee product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default productpage