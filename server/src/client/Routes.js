import React from 'react';
import App from './components/App';
import UsersList from './components/UsersList';

export default [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/users',
    exact: true,
    component: UsersList
  }
];
