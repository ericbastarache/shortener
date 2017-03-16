import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

class UrlForm extends Component {
  constructor (props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

  }
  
  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <Row>
            <Col md={6} mdOffset={3}>
              <SearchBar place="Enter a URL to Shorten"/>
            </Col>
            <Col md={2}>
              <SearchButton button_text="Shorten It"/>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default UrlForm;
