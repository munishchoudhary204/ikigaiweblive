import React from 'react';
import Logo from '../../../assets/logo.png';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: '#0F152F',
          color: 'grey',
          justifyContent: 'left',
        }}
      >
        <Container
          style={{
            paddingTop: '60px',
            paddingBottom: '50px',
          }}
        >
          <Row>
            <Col className="py-2" lg={2}>
              <img src={Logo} />
            </Col>
            <Col>
              <Row>
                <Col className="py-2" sm={12} lg={3}>
                  <h5>About</h5>
                  <span
                    style={{
                      color: 'white',
                    }}
                  >
                    ​A-116, The Corenthum A-65, Sector 62 Noida 201301 UP, India
                  </span>
                </Col>
                <Col className="py-2" sm={12} lg={3}>
                  <h5>Support</h5>
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Privacy Policy
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Terms & Conditions
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Cancellation / Refund Policy
                  </Link>
                </Col>
                <Col className="py-2" sm={12} lg={3}>
                  <h5>Company Links</h5>
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Home
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Leadership
                  </Link>
                  <br />
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Blogs
                  </Link>
                </Col>
                <Col className="py-2" sm={12} lg={3}>
                  <h5>Our Programs</h5>
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    DSS30
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
