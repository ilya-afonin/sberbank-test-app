import { createStore} from 'redux';

import rootReducer from '../reducers';

import { INITIAL_STATE } from '../constants/InitialState';

export default function configureStore(initialState = INITIAL_STATE) {

  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }
  return store;
}
