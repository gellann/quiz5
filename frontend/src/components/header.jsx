import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Recipe Ingredient Swapper</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <LinkContainer to="/login">
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/register">
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default header
