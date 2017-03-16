import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class SearchButton extends Component {
  render () {
    return (
      <Button type="submit" value="submit" bsStyle="primary">{this.props.button_text}</Button>
    );
  }
}

export default SearchButton;
