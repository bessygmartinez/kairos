import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Actions/authActions";
import classnames from "classnames";
import ManagerDashboard from "../Dashboard/ManagerDashboard";
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";
import { toast } from "react-toastify";
import Moment from "react-moment";

import "./Register.css";
import "arrive";

// import { connect } from "mongoose";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "",
      errors: {}
    };
  }

  // componentDidMount() {
  //     //If logged in and user navigates to Register page, should redirect them to dashboard
  //     if (this.props.auth.isAuthenticated) {
  //         this.props.history.push("/dashboard");
  //     }
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    document.arrive("#role", function() {
      let radios = document.getElementById("role");
      radios.style["display"] = "block";
    });

    const { user } = this.props.auth;
    const { errors } = this.state;

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
      return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
          <div className="row">
            <div className="col-sm-6 text-left">
              <Link to="/">
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

          <div className="row mt-3 text-left p-3">
            <div className="col-sm-10 offset-lg-1" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> a new account below
              </h4>
              <p className="grey-text text-darken-1">
                Please supply credentials to employee/manager accordingly.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10 offset-lg-1">
              <form noValidate onSubmit={this.onSubmit} className="md-form">
                <div className="bmd-form-group-sm mb-3">
                  <div className="input-field col-sm-12">
                    <label htmlFor="name">Full Name</label>
                    <br></br>
                    <span className="text-danger">{errors.name}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("form-control", {
                        invalid: errors.name
                      })}
                    />
                  </div>
                </div>

                <div className="bmd-form-group-sm mb-3">
                  <div className="input-field col-sm-12">
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <span className="text-danger">{errors.email}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("form-control", {
                        invalid: errors.email
                      })}
                    />
                  </div>
                </div>

                <div className="bmd-form-group-sm mb-3">
                  <div className="input-field col-sm-12">
                    <label htmlFor="password">Password</label>
                    <br></br>
                    <span className="text-danger">{errors.password}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                </div>

                <div className="bmd-form-group-sm">
                  <div className="input-field col-sm-12">
                    <label htmlFor="password2">Confirm Password</label>
                    <br></br>
                    <span className="text-danger">{errors.password2}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("form-control", {
                        invalid: errors.password2
                      })}
                    />
                  </div>
                </div>

                <div className="col-sm-12 mb-3">
                  <span className="text-danger">{errors.role}</span>
                  <br></br>
                  <span className="mr-3">Account type:</span>
                  <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      value="admin"
                      checked={this.state.role === "admin"}
                      error={errors.role}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {
                        invalid: errors.role
                      })}
                    />{" "}
                    Administrator
                  </label>

                  <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      value="manager"
                      checked={this.state.role === "manager"}
                      error={errors.role}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {
                        invalid: errors.role
                      })}
                    />{" "}
                    Manager
                  </label>

                  <label className="radio-inline">
                    <input
                      onChange={this.onChange}
                      value="employee"
                      checked={this.state.role === "employee"}
                      error={errors.role}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {
                        invalid: errors.role
                      })}
                    />{" "}
                    Employee
                  </label>
                </div>

                <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    onClick={() => toast.success("Account has been registered")}
                    className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
