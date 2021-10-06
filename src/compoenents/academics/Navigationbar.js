import React from 'react';
import Logo from '../../assets/logo.png';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.scss';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <>
      <Navbar
        style={{
          backgroundColor: '#0d101e',
        }}
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={NavLink} exact to="/">
            <img src={Logo} alt="IGIKAI" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ms-auto" style={{ fontSize: '17px' }}>
              <Nav.Link as={NavLink} exact to="/" className="m-3 navhover">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/academics" className="m-3 navhover">
                Academics
              </Nav.Link>
              <Nav.Link as={NavLink} to="/industry" className="m-3 navhover">
                Industy
              </Nav.Link>
              <Nav.Link as={NavLink} to="/individual" className="m-3 navhover">
                Individual
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog" className="m-3 navhover">
                Blog
              </Nav.Link>
              <Nav.Link as={NavLink} to="/leadership" className="m-3 navhover">
                Leadership
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
