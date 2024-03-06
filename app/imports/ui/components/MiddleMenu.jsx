import React from 'react';
import { Col, Row, Dropdown} from 'react-bootstrap';

const MiddleMenu = () => (
  <Col>
    <Row className="justify-content-center pt-3">
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <strong>MEN</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <strong>WOMEN</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <strong>KIDS</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1}>
        <Dropdown>
          <Dropdown.Toggle variant="white" id="dropdown-basic">
            <strong>BRAND</strong>
          </Dropdown.Toggle>
        </Dropdown>
      </Col>
      <Col xs={1} className="d-flex align-items-center">
        <strong>SEARCH</strong>
      </Col>
    </Row>
  </Col>
);

export default MiddleMenu;
