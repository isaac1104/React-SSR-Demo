import { REQUEST_FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  errorMsg: '',
  isFetching: false
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FETCH_USERS:
      return {
        ...state,
        data: [],
        errorMsg:'',
        isFetching: action.payload
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMsg: '',
        isFetching: false
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        data: [],
        errorMsg: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default usersReducer;
