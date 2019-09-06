import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default function searchlist(state = INITIAL_STATE, action) {

  switch (action.type) {

    case types.ADD_FILTER:
      const filterType = action.filter.type;
      const filterFunc = (a, b) => {
        if(state.isDesc) {
          if(a.get(filterType) < b.get(filterType)) return -1;
          if(a.get(filterType) > b.get(filterType)) return 1;
        } else {
          if(a.get(filterType) > b.get(filterType)) return -1;
          if(a.get(filterType) < b.get(filterType)) return 1;
        }
        return 0;
      };
      const sortedData = state.filteredData.sort(filterFunc);

      return {
        ...state,
        filteredData: sortedData,
        isDesc: !state.isDesc,
        activeUser: sortedData.get(0)
      }

    case types.SEARCH_TEXT:
      const filter = x => x.get('firstName').toLowerCase().includes(action.text.toLowerCase());
      const filteredData = state.data.filter(filter);
      return {
        ...state,
        filteredData,
        activeUser: filteredData.get(0)
      }

    case types.CHANGE_ACTIVE: 
      return {
        ...state,
        activeUser: state.data.filter(item => { return item.get('id') === action.id } ).get(0)
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        filteredData: action.data,
        data: action.data,
        activeUser: action.data.get(0),
        isFetching: false
      }

    default:
      return state;
  }
}
