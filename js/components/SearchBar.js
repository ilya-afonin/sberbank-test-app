import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchText = React.createRef();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onSearch(e.target.value);
    }
  }

  onSearch() {
    this.props.onSearch(this.searchText.current.value);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-10">
          <div className="form-group">
            <input
               type="text"
               onKeyPress={this.handleKeyPress.bind(this)}
               className="form-control"
               placeholder="Поиск"
               ref={this.searchText}
             />
          </div>
        </div>
        <div className="col-2">
          <Button variant="info" onClick={this.onSearch.bind(this)}>Найти</Button>
        </div>
      </div>
    );
  }
}
