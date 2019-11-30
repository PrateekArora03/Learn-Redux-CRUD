import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { listUser, deleteUser } from "../actions/index";

class AllUsers extends Component {
  componentDidMount() {
    this.props.listUser();
  }
  render() {
    const { users } = this.props;
    console.log(Object.values(users), "users");
    return (
      <div>
        {Object.values(users).map(user => {
          return (
            <div key={user._id}>
              <h4>{user.name}</h4>
              <Link to={`/edit/${user._id}`}>Update</Link>
              <button onClick={() => this.props.deleteUser(user._id)}>
                Delete
              </button>
            </div>
          );
        })}
        <Link to="/add">Add User</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;
  return { ...users };
};

const AllUsersContainer = connect(mapStateToProps, { listUser, deleteUser })(
  AllUsers
);

export default AllUsersContainer;
