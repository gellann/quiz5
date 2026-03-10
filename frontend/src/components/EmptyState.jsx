import React from 'react'
import { Card } from 'react-bootstrap'

function EmptyState({
  title = 'Recipe Ingredient Swapper',
  message = 'Ask for food ingredient substitutions only. I can suggest swaps for missing cooking or baking ingredients.',
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
