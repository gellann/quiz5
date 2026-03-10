import React from 'react'
import { Card } from 'react-bootstrap'

function ConversationItem({ title, subtitle, time }) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title className="mb-1">{title}</Card.Title>
            <Card.Text className="mb-0 text-muted">{subtitle}</Card.Text>
          </div>
          {time ? <small className="text-muted">{time}</small> : null}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ConversationItem
