import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { logoutUser } from "../../Actions/authActions";
import MyCalendar from "../Calendar";

class EmployeeDashboard extends Component {
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
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container valign-wrapper">
            <div className="row">
            <div className="col-sm-12 text-right">
                <Moment interval={1000} format="LLLL" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 center-align">
                    <h4>
                        <b>{greeting}</b>, {user.name.split(" ")[0]}
                        <p className="flow-text text-secondary">
                            You are logged into the {" "}
                            <span style={{ fontFamily: "monospace"}}>EMPLOYEE</span> dashboard.
                        </p>
                    </h4>
                    <MyCalendar events={this.props.auth.user.workday}/> 
                </div>
            </div>
        </div>
    );
  }
}

EmployeeDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (EmployeeDashboard);