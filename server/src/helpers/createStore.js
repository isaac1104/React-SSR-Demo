import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../client/reducers';

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
  return store;
};
