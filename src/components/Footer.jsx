import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <p>© {new Date().getFullYear()} Debashish Parida. Crafted with <span>♥</span> and code.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
