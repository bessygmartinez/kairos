import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Actions/authActions";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    if (user.role === "admin") {
      return (
        <div>
          <AdminDashboard></AdminDashboard>
        </div>
      );
    } else if (user.role === "manager") {
      return (
        <div>
          <ManagerDashboard></ManagerDashboard>
        </div>
      );
    } else {
      return (
        <div>
          <EmployeeDashboard></EmployeeDashboard>
        </div>
      );
    }
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
