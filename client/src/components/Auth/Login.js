import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../Actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      role: "",
      errors: {}
    };
  }

  componentDidMount() {
    //if logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); //push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();

const userData = {
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

this.props.loginUser(userData); //since we handle the redirect within our component, we don't need to pass
//this.props.history as parameter

  };

render() {
    const { errors } = this.state;

return (
      <div className="container">
        <div style={{ marginTop: "6rem" }} className="row">
          <div className="col-sm-8 offset-sm-2">

            <div className="col-sm-12 mb-2" style={{ paddingLeft: "11.250px" }}>
              <h3>
                <b>Login</b> with your company-supplied credentials below.
              </h3>
              <h6>If you have not been supplied any, please contact an Administrator.</h6>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
              <div className="input-field col-sm-12">
                <label htmlFor="email">Email:</label><br></br>
                <span className="text-danger">{errors.email}{errors.emailnotfound}</span>
                <input
                  autoComplete="on"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  }) }
                />
               </div>
              </div>

              <div className="form-group">
              <div className="input-field col-sm-12">
                <label htmlFor="password">Password:</label><br></br>
                <span className="text-danger">{errors.password}{errors.passwordincorrect}</span>
                <input
                  autoComplete="on"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
              </div>
              </div>

              <div className="col-sm-12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
) (Login);