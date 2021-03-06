import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderRoutes} from 'react-router-config';
import axios from 'axios';
import reduxThunk from 'redux-thunk';
import Routes from './Routes';
import rootReducer from './reducers';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  rootReducer,
  window.INITIAL_STATE,
  applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
