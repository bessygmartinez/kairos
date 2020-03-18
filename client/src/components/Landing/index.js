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
      quote:null,
      photoURL: ""
    }
    }
  

  getNewQuote() {
    axios.get("https://api.quotable.io/random")
    .then((response)=>this.setState({quote:response.data.content}
      ))
  };

  displayPhoto() {
    axios.get("https://pixabay.com/api/?key=15543336-7c6d0c624d0ac9a8577d08ab8&q=working&image_type=photo&pretty=true")
    .then((response)=> {
      let hit = response.data.hits[Math.floor(Math.random() * response.data.hits.length)]
      let photoURL = hit.webformatURL;
      this.setState({photoURL: photoURL})
    }
      )
  }

  componentDidMount() {

    this.getNewQuote();
    this.displayPhoto();

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
              {this.state.quote !==null && <p className="lead">"{this.state.quote}"</p>}
              <img src={this.state.photoURL} alt="Random" style={{maxWidth: "500px"}} className="img-fluid border
              border-secondary" id="landing-photo"></img><br /><br />
              <h1>
                <b>Welcome!</b> Please log in.
              </h1>
              <p className="flow-text grey-text text-darken-1">
                Use your company-supplied credentials to log in to your account.
              </p>
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