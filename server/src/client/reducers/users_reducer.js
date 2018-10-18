import { REQUEST_FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from '../actions';

const INITIAL_STATE = {
  data: [],
  isFetching: false
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FETCH_USERS:
      return {
        ...state,
        data: [],
        isFetching: action.payload
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        data: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};

export default usersReducer;
