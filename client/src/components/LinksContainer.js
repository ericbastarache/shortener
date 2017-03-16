import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import URL from './URL';

class LinksContainer extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col md={6} mdOffset={3}>
            <ul style={{listStyle: 'none', textAlign: 'center', border: '1px solid #ccc', boxShadow: '0 0 3px #ddd', padding: '10px'}}>
              <URL />
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LinksContainer;
