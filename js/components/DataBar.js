import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class DataBar extends Component {
  constructor(props) {
    super(props);
  }

  onSortedByName(e) {
    this.props.onSorted('name');
  }

  render() {
    return (
      
      <div className="databar">
        <Button variant="primary" onClick={this.onSortedByName.bind(this)}>
            Small Data
        </Button>
        <Button variant="primary" onClick={this.onSortedByName.bind(this)}>
          Big Data
        </Button>
      </div>
    
    );
  }
}
