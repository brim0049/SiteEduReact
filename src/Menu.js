import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { HashRouter, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function Menu() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/" exact replace as={NavLink}>
            <FaHome /> Ministère de l'éducation
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/About" replace as={NavLink}>
            À Propos
            </Nav.Link>
            <Nav.Link to="/contact" replace as={NavLink}>
            Contact
            </Nav.Link> 
            <Nav.Link to="/inscription" replace as={NavLink}>
            Inscription
            </Nav.Link>
            <Nav.Link to="/identification" replace as={NavLink}>
            Identification
            </Nav.Link>
            </Nav>
        </Container>
      </Navbar>

  );
}

export default Menu;
