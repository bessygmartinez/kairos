import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../Actions/authActions";

class Nav extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" className="navbar-brand">
          <img
            src="/img/kairos_logo.png"
            alt="kairos logo"
            className="d-inline-block"
            width="220vw"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarmenu"
          aria-controls="navbarmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarmenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link to="/" className="nav-link btn btn-sm waves-effect waves-light hoverable"
                  style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                >
                  Home
              </Link>
            </li>
            {this.props.auth.isAuthenticated ? (
              <li className="nav-item mr-5">
              <Link to="/finalschedule" className="nav-link btn btn-sm waves-effect waves-light hoverable"
                  style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                >
                  Approved
              </Link>
            </li>
            ) : null}
            
            {this.props.auth.isAuthenticated ? ( <li className="nav-item">
              <Link to="/" className="nav-link btn btn-sm waves-effect waves-light hoverable teal-btn text-white"
                  style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onClick={this.onLogoutClick}
                >
                  Logout
              </Link>
            </li> ) : null}
          </ul>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Nav);
