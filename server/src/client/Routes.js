import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    loadData,
    path: '/users',
    exact: true,
    component: UsersListPage
  }
];
