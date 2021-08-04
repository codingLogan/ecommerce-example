import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import useProducts from '../hooks/useProducts'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'

function HomePage({ match }) {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const { loading, products, error, page, pages } = useProducts(
    keyword,
    pageNumber
  )

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomePage
