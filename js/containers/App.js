import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import SearchApp from './SearchApp';
import rootReducer from '../reducers';
import { fetchUsers } from '../actions';

import { URL_DATA_SMALL } from '../constants/DataUrls'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchUsers(this.props.store, URL_DATA_SMALL));
  }

  render() {
    const store = this.props.store;

    return (
      <Provider store={store}>
        <div>
          <SearchApp store={store} />
        </div>
      </Provider>
    );
  }
}
