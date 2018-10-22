import { REQUEST_FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, FETCH_CURRENT_USER, FETCH_ADMINS } from './types';

const requestFetchUsers = () => ({
  type: REQUEST_FETCH_USERS,
  payload: true
});

const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

const fetchUsersFail = error => ({
  type: FETCH_USERS_FAIL,
  payload: error
});

export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch(requestFetchUsers());
  const request = await api.get('/users');
  const { data } = request;
  if (data) {
    dispatch(fetchUsersSuccess(data));
  } else {
    disptach(fetchUsersFail('An Unexpected Error Has Occured. Please Try Again Later.'));
  }
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const request = await api.get('/current_user');
  const { data } = request;
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: data
  });
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const request = await api.get('/admins');
  const { data } = request;
  dispatch({
    type: FETCH_ADMINS,
    payload: data
  });
};
