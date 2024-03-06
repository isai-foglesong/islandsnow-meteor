import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterMenu = () => (
  <footer>
    <Container>
      <Row className="py-4">
        <Col>
          NAVIGATION
          <hr/>
          About Us
          <br/> Employment
          <br/> Videos
        </Col>
        <Col>
          MAIN MENU
          <hr/>
          Men
          <br/> Women
          <br/> Kids
        </Col>
        <Col>
          CONNECT
          <hr/>
          Sign up for the latest updates
          <br/>
          <input type="text" placeholder="Enter Email Address"/>
          <button className="btn btn-dark">Join</button>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;