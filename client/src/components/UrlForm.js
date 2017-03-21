import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class UrlForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: '',
      shortU: ''
      showShort: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: '/urls/create',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        long_url: this.state.value
      }
    }).then((response) => {
      console.log(response);
      //this.setState({showShort: true, showU: response.vaue});
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Form horizontal onSubmit={this.handleSubmit}>
          <Row>
            <Col md={6} mdOffset={3}>
              <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
            </Col>
            <Col md={2}>
              <button className="btn btn-primary" type="submit">Shorten It</button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col md={6} mdOffset={3}>
            <ul style={{listStyle: 'none', textAlign: 'center', border: '1px solid #ccc', boxShadow: '0 0 3px #ddd', marginTop: '10px', padding: '10px'}}>
              <li style={{borderBottom: '1px dashed #ccc'}}>
                <a href="#">Some bogus url</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

    );
  }
}

export default UrlForm;
