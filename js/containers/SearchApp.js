import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SearchBar, DataBar, UserTable, UserDetail } from '../components';
import * as actions from '../actions';

const { searchText, changeActive, addFilter } = actions;

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  onSearch(value) {
    this.store.dispatch(searchText(value));
  }

  onSelectUser(id) {
    this.store.dispatch(changeActive(id));
  }

  onSorted(type) {
    this.store.dispatch(addFilter({type}));
  }

  render () {
    const state = this.store.getState();
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <DataBar onSorted={this.onSorted.bind(this)} />
          </div>
          <div className="col-7">
            <SearchBar onSearch={this.onSearch.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <UserTable
              isFetching={state.isFetching}
              userData={state.filteredData}
              onSelectUser={this.onSelectUser.bind(this)}
              onSorted={this.onSorted.bind(this)}
            />
          </div>
          <div className="col-4">
            <UserDetail isFetching={state.isFetching} activeUser={state.activeUser} />
          </div>
        </div>
      </div>
    );
  }
}



function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(SearchApp);
