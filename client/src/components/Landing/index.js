import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./landing.css";
import axios from 'axios';

class Landing extends Component {


  constructor(props) {
    super(props); 
    this.state={
      quote:null
    }
    }
  

  getNewQuote() {
    axios.get("https://api.kanye.rest")
    .then((response)=>this.setState({quote:response.data}
      ))
  };

  componentDidMount() {

    this.getNewQuote();


    //if logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };

    render() {
      return (
        <div style={{ height: "75vh" }} className="container mt-5">
          <div className="row">
            <div className="col-sm-12 text-center">
              {this.state.quote !==null && <p>{this.state.quote.quote}</p>}
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

  Landing.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps  
) (withRouter(Landing));