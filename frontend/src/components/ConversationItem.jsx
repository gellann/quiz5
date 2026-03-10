import React from 'react'
import { Card } from 'react-bootstrap'

function ConversationItem({ role = 'assistant', message }) {
  const isUser = role === 'user'

  return (
    <div className={`d-flex mb-2 ${isUser ? 'justify-content-end' : 'justify-content-start'}`}>
      <Card className={isUser ? 'w-75 bg-primary text-white' : 'w-75 bg-light'}>
        <Card.Body>
          <Card.Text className="mb-1">{message}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ConversationItem
