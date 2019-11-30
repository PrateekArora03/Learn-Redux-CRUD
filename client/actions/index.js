import axios from "axios";

//action type
export const ADD_USER = "ADD_USER";
export const LIST_USER = "LIST_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

//action creators
export const addUser = userData => {
  return async dispatch => {
    const user = await axios.post(
      "http://localhost:3000/api/v1/users",
      userData
    );
    console.log(user.data.user);
    dispatch({
      type: ADD_USER,
      user: user.data.user
    });
  };
};
export const listUser = () => {
  return async dispatch => {
    const user = await axios.get("http://localhost:3000/api/v1/users");
    dispatch({
      type: LIST_USER,
      users: user.data.users.reduce((acc, cv) => {
        acc[cv._id] = cv;

        return acc;
      }, {})
    });
  };
};
export function updateUser(id, user) {
  return async dispatch => {
    const updatedUser = await axios.put(
      `http://localhost:3000/api/v1/users/${id}`,
      user
    );
    dispatch({ type: UPDATE_USER, user: updatedUser.data.user });
  };
}
export function deleteUser(id) {
  return async dispatch => {
    const user = await axios.delete(`http://localhost:3000/api/v1/users/${id}`);
    dispatch({ type: DELETE_USER, id });
  };
}
