import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
    render() {
      return (
        <div style={{ height: "75vh" }} className="container mt-5">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p>This is where the quote API would go. Underneath would be a company logo.</p>
              <img src="https://via.placeholder.com/400x100" alt="Company Logo"></img><br /><br />
              <h1>
                <b>Welcome!</b> Please log in.
              </h1>
              <p className="flow-text grey-text text-darken-1">
                Use your company-supplied credentials to log in to your account.
              </p>
              {/* <div className="col-sm-12">
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
              </div> */}
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