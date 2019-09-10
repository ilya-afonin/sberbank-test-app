import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {URL_DATA_BIG, URL_DATA_SMALL} from '../constants/DataUrls'

export default class DataBar extends Component {
  constructor(props) {
    super(props);
  }

  getSmallData(e) {
    this.props.onFetch(URL_DATA_SMALL);
  }

  getBigData() {
    this.props.onFetch(URL_DATA_BIG);
  }

  render() {
    return (
      
      <div className="databar">
        <Button onClick={this.getSmallData.bind(this)}>
          Small Data
        </Button>
        <Button onClick={this.getBigData.bind(this)}>
          Big Data
        </Button>
      </div>
    
    );
  }
}
