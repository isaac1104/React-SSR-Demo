import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
  return store;
};
