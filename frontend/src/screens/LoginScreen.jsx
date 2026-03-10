import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

function LoginScreen() {
	return (
		<Row className="justify-content-md-center">
			<Col xs={12} md={6}>
				<h1>Sign In</h1>
				<Form>
					<Form.Group controlId="email" className="my-3">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="password" className="my-3">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Enter password" />
					</Form.Group>

					<Button type="submit" variant="primary" className="mt-2">
						Sign In
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default LoginScreen
