import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../actions/index";

class AddUser extends Component {
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
    this.props.addUser(this.state);
    this.props.history.push("/");
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
  return { ...status };
};
const userAdd = withRouter(AddUser);
export default connect(mapStateToProps, { addUser })(userAdd);
