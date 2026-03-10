import React from 'react'
import { Row, Col } from 'react-bootstrap'
import EmptyState from '../components/EmptyState'

function HomeScreen() {
  return (
    <div>
    <h1>Recipe Ingredient Swapper</h1>
        <Row>
      <Col md={12}>
        <EmptyState />
      </Col>
        </Row>
    </div>
  )
}

export default HomeScreen
