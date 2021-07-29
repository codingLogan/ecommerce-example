import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Nerd Cards</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
