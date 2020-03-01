import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Actions/authActions";

class AdminDashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

        //For greeting:
        const today = new Date()
        const curHr = today.getHours()
        let greeting = "";

        if (curHr < 12) {
            greeting = "Good morning";
        } else if (curHr < 17) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

    return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
            <div className="row">
                <div className="col-sm-12 text-right">
                <Moment interval={1000} format="LLLL" />
                </div>
            </div>

            <div className="row mt-5 text-center">
                <div className="col-sm-12">
                    <h4>
                        <b>{greeting}</b>, {user.name.split(" ")[0]}
                        <p className="flow-text text-secondary">
                            You are logged into the {" "}
                            <span style={{ fontFamily: "monospace"}}>ADMIN</span> dashboard.
                        </p>
                    </h4>
            </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-12 text-center">
                    <p>Register a new account:</p>
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                >
                  Register
                </Link>
              </div>

              <div className="col-sm-12 text-center mt-4">
                    <p>View all accounts to edit/delete:</p>
                <Link
                  to="/"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                >
                  View All
                </Link>
              </div>
            </div>

            {/* <div className="row mt-5">
              <div className="col-sm-12">
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
                </div> */}

            </div>
    );
  }
}

AdminDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (AdminDashboard);