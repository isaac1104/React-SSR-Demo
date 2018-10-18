import React from 'react';
import App from './components/App';
import UsersList, { loadData } from './components/UsersList';

export default [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    loadData,
    path: '/users',
    exact: true,
    component: UsersList
  }
];
