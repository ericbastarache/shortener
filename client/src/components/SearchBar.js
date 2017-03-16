import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class SearchBar extends Component {
  render () {
    return (
      <div>
        <FormGroup>
          <FormControl bsClass="form-control" type="text" placeholder={this.props.place}/>
        </FormGroup>
      </div>
    );
  }
}

export default SearchBar;
