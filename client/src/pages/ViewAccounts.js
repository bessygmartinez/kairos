import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import usersAPI from "../utils/usersAPI";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../Actions/authActions";
import ManagerDashboard from "../components/Dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";

class ViewAccounts extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    role: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    usersAPI
      .getUsers()
      .then(res =>
        this.setState({
          users: res.data,
          name: "",
          email: "",
          role: ""
        })
      )
      .catch(err => console.log(err));
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    // let admins = this.state.users.filter(admin => {
    //   return admin.role === "admin";
    // });

    let managers = this.state.users.filter(manager => {
      return manager.role === "manager";
    });

    let employees = this.state.users.filter(employee => {
      return employee.role === "employee";
    });

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

          <div className="row mt-5 text-center">
            <div className="col-sm-12">
              <h4>
                <p className="flow-text text-secondary">
                  Please click on the role of the{" "}
                  <span style={{ fontFamily: "monospace" }}>USERS</span> you'd like to see.<br></br>
                  <small>Toggle the view by clicking on the role again.</small>
                </p>
              </h4>
            </div>
          </div>

          <div className="row mt-5">
            {/* <div className="col-sm-4 text-center">
              <a
                className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                data-toggle="collapse"
                href="#admin-list"
                role="button"
                aria-expanded="false"
                aria-controls="admin-list"
              >
                <h3>Administrators</h3>
              </a>
              <div className="collapse multi-collapse" id="admin-list">
                <div className="card card-body">
                  {admins.map(admin => (
                    <Link to={"/users/" + admin._id} key={admin._id}>
                      <h5>{admin.name}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}

            <div className="col-sm-6 text-center">
              <a
                className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                data-toggle="collapse"
                href="#manager-list"
                role="button"
                aria-expanded="false"
                aria-controls="manager-list"
              >
                <h3>Managers</h3>
              </a>
              <div className="collapse multi-collapse" id="manager-list">
                <div className="card card-body">
                  {managers.map(manager => (
                    <Link to={"/users/" + manager._id} key={manager._id}>
                      <h5>{manager.name}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-sm-6 text-center">
              <a
                className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                data-toggle="collapse"
                href="#employee-list"
                role="button"
                aria-expanded="false"
                aria-controls="employee-list"
              >
                <h3>Employees</h3>
              </a>
              <div className="collapse multi-collapse" id="employee-list">
                <div className="card card-body">
                  {employees.map(employee => (
                    <Link to={"/users/" + employee._id} key={employee._id}>
                      <h5>{employee.name}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

ViewAccounts.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(ViewAccounts);
