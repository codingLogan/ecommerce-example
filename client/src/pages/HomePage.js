import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import useProducts from '../hooks/useProducts'

function HomePage() {
  // Component Level State
  const { loading, products, error } = useProducts()

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h3>{error}</h3>
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
