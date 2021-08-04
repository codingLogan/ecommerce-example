import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import useProducts from '../hooks/useProducts'
import Message from '../components/Message'
import Loader from '../components/Loader'

function HomePage({ match }) {
  const keyword = match.params.keyword
  const { loading, products, error } = useProducts(keyword)

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomePage
