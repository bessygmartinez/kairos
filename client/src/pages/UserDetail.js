import React, { Component } from "react";
import usersAPI from "../utils/usersAPI";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class userDetail extends Component {
  state = {
    user: {}
  };

  //When the component mounts, grab user with id of this.props.match.params.id
  componentDidMount() {
    usersAPI
      .getUser(this.props.match.params.id)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  deleteUser = id => {
    usersAPI.deleteUser(id)
    .then(toast.error("Account has been deleted"))
    .catch(err => console.log(err));
};

  render() {
    let role = "";

    if (this.state.user.role === "employee") {
      role = "Employee";
    } else if (this.state.user.role === "manager") {
      role = "Manager";
    } else {
      role = "Administrator";
    }

    return (
        <div style={{ marginTop: "2rem", height: "75vh" }} className="container">
          <div className="row">
          <div className="col-sm-6 text-left">
              <Link to="/"><i className="material-icons" style={{fontSize: "130%"}}>keyboard_backspace</i> back</Link>
              </div>
            <div className="col-sm-6 text-right">
              <Moment interval={1000} format="LLLL" />
            </div>
          </div>

          <div className="row mt-3 text-center">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <div className="card border-secondary mb-3">
                <h1 className="card-header">{this.state.user.name}</h1>
              <div className="card-body text-secondary">    
                <h5 className="card-subtitle my-2">Account type: {role}</h5>
               <div className="card-text mb-2">
                <h5>Email: {this.state.user.email}</h5>
                </div>
              
              <div className="row mt-4">
              <div className="col ">
                  <Link to="/" className="btn btn-sm bg-secondary text-white waves-effect waves-light hoverable" style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}>Edit <i className="material-icons" style={{fontSize: "130%"}}>edit</i></Link>
              </div>
              <div className="col">
              <Link to="/" className="btn btn-sm bg-danger text-white waves-effect waves-light hoverable"
                    style={{
                    width: "100px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                    }}
                    onClick={() => this.deleteUser(this.state.user._id)}
                  >Delete <i className="material-icons" style={{fontSize: "130%"}}>delete_forever</i></Link>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default userDetail;
