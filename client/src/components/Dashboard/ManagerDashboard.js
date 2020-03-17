import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { logoutUser } from "../../Actions/authActions";
import MyCalendar from "../Calendar";

class ManagerDashboard extends Component {
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
        <div style={{ marginTop: "1.8rem", height: "100%" }} className="container valign-wrapper">
            <div className="row">
            <div className="col-sm-6">
                    <h4>
                        <b>{greeting}</b>, {user.name.split(" ")[0]} <br></br>
                        <p className="small text-secondary">
                            You are logged into the {" "}
                            <span style={{ fontFamily: "monospace"}}>MANAGER</span> dashboard.
                        </p>
                    </h4>
                </div>

            <div className="col-sm-6 text-right">
                <Moment interval={1000} format="LLLL" />
                <br></br>
                <button
                      style={{
                      width: "40%",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                      }}
                    type="submit"
                    className="btn btn-flat btn-large waves-effect waves-light hoverable teal-btn text-white mt-2">
                    Submit This Schedule{" "}
                          <i className="material-icons" style={{ fontSize: "130%" }}>
                            schedule
                          </i>
                        </button>
                </div>
            </div>

                    <div className="row mt-2">
                        <div className="col-sm-12 center-align">
                    <MyCalendar /> 
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