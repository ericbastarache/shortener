import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    }
  }
  handleChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <div>
        <FormGroup>
          <FormControl value={this.state.value} onChange={this.handleChange} bsClass="form-control" type="text" placeholder={this.props.place}/>
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;
