import React, { Component } from "react";
import PropTypes from "prop-types";
import usersAPI from "../utils/usersAPI";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { logoutUser } from "../Actions/authActions";
import ManagerDashboard from "../components/Dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import classnames from "classnames";

class userDetail extends Component {
  state = {
    user: {},
    isEdit: false
  };

  //When the component mounts, grab user with id of this.props.match.params.id
  componentDidMount() {
    usersAPI
      .getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteUser = id => {
    usersAPI
      .deleteUser(id)
      .then(toast.error("Account has been deleted"))
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const userUpdate = {
      name: this.user.name,
      role: this.user.role,
      email: this.user.email
    };

    usersAPI.updateUser(userUpdate).then(toast.success("Account info has been updated"));
  };

  render() {

  const onClick = () => {
      this.setState({ isEdit: true });
    };

    const { user } = this.props.auth;

    let role = "";

    if (this.state.user.role === "employee") {
      role = "Employee";
    } else if (this.state.user.role === "manager") {
      role = "Manager";
    } else {
      role = "Administrator";
    }

    if (user.role === "manager") {
      return (
        <div>
          <ManagerDashboard />
        </div>
      );
    } else if (user.role === "employee") {
      return (
        <div>
          <EmployeeDashboard />
        </div>
      );
    } else {
      if (this.state.isEdit === true) {
        return (
          <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
            <div className="row">
              <div className="col-sm-6 text-left">
                <Link to="/viewaccounts">
                  <i className="material-icons" style={{ fontSize: "130%" }}>
                    keyboard_backspace
                  </i>{" "}
                  back
                </Link>
              </div>
              <div className="col-sm-6 text-right">
                <Moment interval={1000} format="LLLL" />
              </div>
            </div>
  
            <div className="row mt-3 text-center">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                <form noValidate onSubmit={this.onSubmit} className="md-form">
                <div className="card border-secondary mb-3">
                  <div className="card-header input-field">
                    <h1><input 
                    onChange={this.onChange}
                    value={this.state.user.name}
                    id="name"
                    type="text"
                    className="form-control text-center"
                    style={{"fontSize": "100%"}}
                    /></h1>
                  </div>

                  <div className="card-body text-secondary">
                    <div className="card-text my-2 input-field text-secondary">
                      <h5>Account type:&nbsp;&nbsp;&nbsp;
                      <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      value="admin"
                      checked={this.state.user.role === "admin"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Administrator
                  </label>

                  <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      value="manager"
                      checked={this.state.user.role === "manager"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Manager
                  </label>

                  <label className="radio-inline">
                    <input
                      onChange={this.onChange}
                      value="employee"
                      checked={this.state.user.role === "employee"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Employee
                  </label></h5>
                    </div>

                  
                    <div className="card-text mb-2 input-group text-secondary ">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><h5>Email:&nbsp;&nbsp;&nbsp;</h5></span>
                        <h5><input
                        onChange={this.onChange}
                        value={this.state.user.email}
                        id="email"
                        type="text"
                        className="form-control"
                        style={{"fontSize": "100%"}}
                        /></h5>
                      </div>
                    </div>
  
                    <div className="row mt-4">
                      <div className="col">
                        <button
                          id="edit-button"
                          className="btn btn-sm bg-secondary text-white"
                          onClick={() => onClick()}
                          style={{
                            width: "100px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                          }}
                        >
                          Edit{" "}
                          <i className="material-icons" style={{ fontSize: "130%" }}>
                            edit
                          </i>
                        </button>
                      </div>
                      <div className="col">
                        <Link
                          to="/"
                          className="btn btn-sm bg-danger text-white waves-effect waves-light hoverable"
                          style={{
                            width: "100px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                          }}
                          onClick={() => this.deleteUser(this.state.user._id)}
                        >
                          Delete{" "}
                          <i className="material-icons" style={{ fontSize: "130%" }}>
                            delete_forever
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        )
      }

      return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
          <div className="row">
            <div className="col-sm-6 text-left">
              <Link to="/viewaccounts">
                <i className="material-icons" style={{ fontSize: "130%" }}>
                  keyboard_backspace
                </i>{" "}
                back
              </Link>
            </div>
            <div className="col-sm-6 text-right">
              <Moment interval={1000} format="LLLL" />
            </div>
          </div>

          <div className="row mt-3 text-center">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <div className="card border-secondary mb-3">
                <h1 className="card-header">
                  {this.state.user.name}
                </h1>
                <div className="card-body text-secondary">
                  <h5 className="card-subtitle my-2">
                    Account type:{" "}
                      {role}
                  </h5>
                  <div className="card-text mb-2">
                    <h5>
                      Email:{" "}
                        {this.state.user.email}
                    </h5>
                  </div>

                  <div className="row mt-4">
                    <div className="col">
                      <button
                        id="edit-button"
                        className="btn btn-sm bg-secondary text-white"
                        onClick={() => onClick()}
                        style={{
                          width: "100px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                      >
                        Edit{" "}
                        <i className="material-icons" style={{ fontSize: "130%" }}>
                          edit
                        </i>
                      </button>
                    </div>
                    <div className="col">
                      <Link
                        to="/"
                        className="btn btn-sm bg-danger text-white waves-effect waves-light hoverable"
                        style={{
                          width: "100px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                        onClick={() => this.deleteUser(this.state.user._id)}
                      >
                        Delete{" "}
                        <i className="material-icons" style={{ fontSize: "130%" }}>
                          delete_forever
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

userDetail.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(userDetail);
