import React from "react";
import "../components/Modal/modal.css";
import { Link } from "react-router-dom";

class Confirm extends React.Component {

    render() {
        let button = document.getElementById("modal-button");
        let modal = document.querySelector("#modal1");

        if(button) {
            button.addEventListener("click", function() {
                modal.classList.add("off")
            })
        };
        
        return (
            <div className="modal-container">
              <div className="modal1" id="modal1">
                  <div className="col-12 mt-3">
                      <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                <div className="content text-center text-nowrap">
                  <h3 className="m-3">Are you sure you want to delete<br></br><b>{this.props.user.name}</b>?</h3>
                </div>
                <div className="actions text-center">
                    <Link to="/viewaccounts">
                  <button id="modal-button" 
                    className="btn btn-raised btn-large bg-danger waves-effect waves-light hoverable text-white toggle-button ml-3 mb-3"
                    onClick={() => this.props.deleteUser(this.props.user._id)}
                  >
                    YES, DELETE{" "}
                        <i className="material-icons" style={{ fontSize: "130%" }}>
                          delete_forever
                        </i>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          );
    }
}

export default Confirm;