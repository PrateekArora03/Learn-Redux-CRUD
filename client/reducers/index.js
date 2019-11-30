import {
  ADD_USER,
  LIST_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions/index";

const INITIAL_STATE = {
  users: {}
};

const UsersReducers = (state = INITIAL_STATE, action) => {
  console.log(action, "in reducers");
  switch (action.type) {
    case LIST_USER:
      return {
        ...state,
        users: action.users
      };
    case ADD_USER:
      return {
        ...state,
        [action.user._id]: action.user
      };
    case UPDATE_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.user._id]: action.user
        }
      };
    case DELETE_USER:
      return {
        ...state,
        users: Object.values(state.users).reduce((acc, cv) => {
          if (action.id !== cv._id) {
            acc[cv._id] = cv;
          }
          return acc;
        }, {})
      };
    default:
      return { ...state };
  }
};

export default UsersReducers;
