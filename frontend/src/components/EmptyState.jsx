import React from 'react'
import { Card } from 'react-bootstrap'

function EmptyState({
  title = 'Recipe Ingredient Swapper',
  message = 'Welcome! Start by searching ingredients or creating your first recipe swap.',
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{message}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default EmptyState
