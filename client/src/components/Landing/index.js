import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
    render() {
      return (
        <div style={{ height: "75vh" }} className="container mt-5">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h4>
                <b>Welcome!</b> Please log in.
              </h4>
              <p className="flow-text grey-text text-darken-1">
                Use your company-supplied credentials to log in to your account.
              </p>
              <br />
              <div className="col-sm-12">
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
              <div className="col-sm-12">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Landing;