import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div className="d-flex justify-content-center my-4">
      <Spinner animation="border" role="status" />
    </div>
  )
}

export default Loader
