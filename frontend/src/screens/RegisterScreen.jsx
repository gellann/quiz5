import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

function RegisterScreen() {
	return (
		<Row className="justify-content-md-center">
			<Col xs={12} md={6}>
				<h1>Register</h1>
				<Form>
					<Form.Group controlId="name" className="my-3">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>

					<Form.Group controlId="email" className="my-3">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="password" className="my-3">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Enter password" />
					</Form.Group>

					<Form.Group controlId="confirmPassword" className="my-3">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm password" />
					</Form.Group>

					<Button type="submit" variant="primary" className="mt-2">
						Register
					</Button>
				</Form>
			</Col>
		</Row>
	)
}

export default RegisterScreen
