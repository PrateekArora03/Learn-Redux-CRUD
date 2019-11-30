import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { updateUser } from "../actions/index";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.props.match.params.id, this.state);
    this.props.history.push("/");
  }

  componentDidMount() {
    Object.values(this.props.users).filter(user => {
      if (user._id === this.props.match.params.id) {
        this.setState({ name: user.name, email: user.email });
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  const { users } = state;
  return { ...users };
};
const userUpdate = withRouter(UpdateUser);
export default connect(mapStateToProps, { updateUser })(userUpdate);
