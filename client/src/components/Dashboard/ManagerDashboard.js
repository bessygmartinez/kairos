import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Actions/authActions";

class ManagerDashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

    return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container valign-wrapper">
            <div className="row">
                <div className="col-sm-12 center-align">
                    <h4>
                        <b>Hey there,</b> {user.name.split(" ")[0]}
                        <p className="flow-text text-secondary">
                            You are logged into the {" "}
                            <span style={{ fontFamily: "monospace"}}>MANAGER</span> dashboard.
                        </p>
                    </h4>
                    <button style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
  }
}

ManagerDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (ManagerDashboard);