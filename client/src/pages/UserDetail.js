import React, { Component } from "react";
import PropTypes from "prop-types";
import usersAPI from "../utils/usersAPI";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { logoutUser } from "../Actions/authActions";
import ManagerDashboard from "../components/Dashboard/ManagerDashboard";
import EmployeeDashboard from "../components/Dashboard/EmployeeDashboard";
import classnames from "classnames";
import Confirm from "./Confirm";

class userDetail extends Component {
  state = {
    user: {},
    isEdit: false,
    show: false
  };

  //When the component mounts, grab user with id of this.props.match.params.id
  componentDidMount() {
    usersAPI
      .getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteUser = id => {
    usersAPI
      .deleteUser(id)
      .then(toast.error("Account has been deleted"))
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ user: {
      ...this.state.user,
      [e.target.id]: e.target.value 
    }});
  };

  onSubmit = () => {

    const userUpdate = {
      name: this.state.user.name,
      role: this.state.user.role,
      email: this.state.user.email,
    };

    usersAPI.updateUser(this.state.user._id, userUpdate)
    .then(toast.success("Account has been updated"))
    .then(this.setState({isEdit: false}))
    .then(this.props.history.push("/users/" + this.state.user._id))
  };

  onClose = e => {
    this.onClose() && this.onClose(e);
  };

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {

  const onEdit = () => {
      this.setState({ isEdit: true });
    };

    const { user } = this.props.auth;

    let role = "";

    if (this.state.user.role === "employee") {
      role = "Employee";
    } else if (this.state.user.role === "manager") {
      role = "Manager";
    } else {
      role = "Administrator";
    }

    if (user.role === "manager") {
      return (
        <div>
          <ManagerDashboard />
        </div>
      );
    } else if (user.role === "employee") {
      return (
        <div>
          <EmployeeDashboard />
        </div>
      );
    } else {
      if (this.state.isEdit === true) {
        return (
          <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
            <div className="row">
              <div className="col-sm-6 text-left">
                <Link to="/viewaccounts">
                  <i className="material-icons" style={{ fontSize: "130%" }}>
                    keyboard_backspace
                  </i>{" "}
                  back
                </Link>
              </div>
              <div className="col-sm-6 text-right">
                <Moment interval={1000} format="LLLL" />
              </div>
            </div>
  
            <div className="row mt-3">
              <div className="col-sm-12 col-lg-6 offset-lg-3">
                
                <form noValidate onSubmit={this.onSubmit} className="md-form">
                <div className="card border-secondary mb-3">
                  <div className="card-title input-field">
                    <div className="text-muted text-center mt-3 mb-3">Edit information below and click Submit when finished.</div>
                    
                    <h1><input 
                    onChange={this.onChange}
                    defaultValue={this.state.user.name}
                    id="name"
                    type="text"
                    className="form-control text-center"
                    style={{"fontSize": "100%"}}
                    /></h1>
                  </div>

                  <div className="card-body text-secondary">
                    <div className="card-text my-2 input-field text-secondary ml-4  ">
                      <h5>Account type:&nbsp;&nbsp;&nbsp;
                      {/* <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      defaultValue="admin"
                      defaultChecked={this.state.user.role === "admin"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Administrator
                  </label> */}

                  <label className="radio-inline mr-4">
                    <input
                      onChange={this.onChange}
                      defaultValue="manager"
                      defaultChecked={this.state.user.role === "manager"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Manager
                  </label>

                  <label className="radio-inline">
                    <input
                      onChange={this.onChange}
                      defaultValue="employee"
                      defaultChecked={this.state.user.role === "employee"}
                      id="role"
                      type="radio"
                      name="inlineRadioOptions"
                      className={classnames("bmd-radio", {})}
                    />{" "}
                    Employee
                  </label></h5>
                    </div>

                  
                    <div className="card-text my-2 input-group text-secondary">
                      <h5 className="input-group-prepend">
                        <span className="input-group-text ml-4 text-secondary"><h5>Email:&nbsp;&nbsp;&nbsp;</h5></span>
                        <div><h5><input
                        defaultValue={this.state.user.email}
                        onChange={this.onChange}
                        id="email"
                        type="text"
                        className="form-control"
                        style={{"fontSize": "100%"}}
                        /></h5></div>
                      </h5>
                    </div>
  
                    <div className="row text-center">
                      <div className="col">
                      <button
                      style={{
                      width: "100px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                      }}
                    type="submit"
                    onClick={() => this.onSubmit()}
                    className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white">
                    Submit{""}
                          <i className="material-icons" style={{ fontSize: "130%" }}>
                            send
                          </i>
                        </button>
                      </div>

                      {/* <div className="col">
                        <button
                          className="btn btn-sm bg-danger text-white waves-effect waves-light hoverable"
                          style={{
                            width: "100px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                          }}
                            onClick={() => this.showModal()}
                        >
                          Delete{" "}
                          <i className="material-icons" style={{ fontSize: "130%" }}>
                            delete_forever
                          </i>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        )
      } else {

      return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
          <div className="row">
            <div className="col-sm-6 text-left">
              <Link to="/viewaccounts">
                <i className="material-icons" style={{ fontSize: "130%" }}>
                  keyboard_backspace
                </i>{" "}
                back
              </Link>
            </div>
            <div className="col-sm-6 text-right">
              <Moment interval={1000} format="LLLL" />
            </div>
          </div>

          <div className="row mt-3 text-center">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <div className="card border-secondary mb-3">
                <h1 className="card-header">
                  {this.state.user.name}
                </h1>
                <div className="card-body text-secondary">
                  <h5 className="card-subtitle my-2">
                    Account type:{" "}
                      {role}
                  </h5>
                  <div className="card-text mb-2">
                    <h5>
                      Email:{" "}
                        {this.state.user.email}
                    </h5>
                  </div>

                  <div className="row mt-4">
                    <div className="col">
                      <button
                        id="edit-button"
                        className="btn btn-sm bg-secondary text-white"
                        onClick={() => onEdit()}
                        style={{
                          width: "100px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                      >
                        Edit{" "}
                        <i className="material-icons" style={{ fontSize: "130%" }}>
                          edit
                        </i>
                      </button>
                    </div>
                    <div className="col">
                      <button
                        className="btn btn-sm bg-danger text-white waves-effect waves-light hoverable"
                        style={{
                          width: "100px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem"
                        }}
                        onClick={() => this.showModal()}
                      >
                        Delete{" "}
                        <i className="material-icons" style={{ fontSize: "130%" }}>
                          delete_forever
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.show ? (
            <Confirm
              onClose={this.showModal}
              show={this.state.show}
              user={this.state.user}
              deleteUser={this.deleteUser}
            />
          ) : null}
        </div>
      )
    }
    }
  }
}

userDetail.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { logoutUser })(userDetail);
