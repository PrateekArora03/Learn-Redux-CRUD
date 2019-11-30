import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import UsersReducers from "./reducers/index";

const reducers = combineReducers({
  users: UsersReducers
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
