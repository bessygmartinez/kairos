import React from "react";
import "./modal.css";
import { connect } from "react-redux";

class Modal extends React.Component {
  componentDidMount() {
    this.setState({ switch: this.props.switch });
  }

  //   if (this.props.event.availability === false){
  //   this.setState({switch: this.props.event.availability})
  //   }
  //   else {this.setState({switch: true})}
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.event.availability === true){
  //     this.setState({ switch: nextProps.switch })
  //   }
  // }

  render() {
    let button = document.getElementById("modal-button");
    let modal = document.querySelector("#modal1");

    if (button) {
      button.addEventListener("click", function() {
        modal.classList.add("off");
      });
    }

    // [].forEach.call(buttons, function(button) {
    //   button.addEventListener("click", function() {
    //     modal.classList.toggle("off");
    //   });
    // });

    return (
      <div className="modal-container">
        <div className="modal1" id="modal1">
          <div className="col-12 mt-0">
            <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
              <span aria-hidden="true" className="display-4">&times;</span>
            </button><br></br>
            <h2 className="mr-3 mt-0">{this.props.startView}</h2>
          </div>

          <div className="content">
            <form>
              <div className="switch mt-3">
                <label className="text-secondary">
                  <input
                    type="checkbox"
                    onSubmit={this.props.onSubmit}
                    onChange={this.props.onChange}
                    checked={this.props.switch}
                    value={this.props.switch}
                    id="switch"
                  />
                  Available
                </label>
              </div>
            </form>
          </div>
          <div className="actions">
            <button
              id="modal-button"
              className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white toggle-button ml-3 mb-3"
              onClick={this.props.onSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Modal);
