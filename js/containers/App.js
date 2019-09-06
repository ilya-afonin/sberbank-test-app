import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import SearchApp from './SearchApp';
import rootReducer from '../reducers';
import { fetchUsers } from '../actions';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const urlBigData = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    store.dispatch(fetchUsers(this.props.store, urlBigData));
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
