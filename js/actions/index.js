import * as types from '../constants/ActionTypes';

export function addFilter(filter) {
  return {
    type: types.ADD_FILTER,
    filter
  };
}

export function searchText(text) {
  return {
    type: types.SEARCH_TEXT,
    text
  };
}

export function changeActive(id) {
  return {
    type: types.CHANGE_ACTIVE,
    id
  };
}

function receiveUsers(data) {
  return {
    type: types.RECEIVE_USERS,
    data
  };
}

export function fetchUsers(store, url) {
  return (dispatch) => {
    return fetch(url, { mode: 'cors'})
      .then(response => response.json())
      .then(json => store.dispatch(receiveUsers(Immutable.fromJS(json))))
      .catch(ex => console.log('parsing failed', ex));
  };
}

export function Headers(headers) {
     this.map = {}
}