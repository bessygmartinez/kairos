import React from "react";
import "./modal.css";
import { connect } from "react-redux";

class Modal extends React.Component {

  // componentDidMount() {
  //   this.setState({
  //     user: this.props.auth.user
  //   })

  //   if (this.props.event.availability === false){
  //   this.setState({switch: this.props.event.availability})
  //   }
  //   else {this.setState({switch: true})}
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.event.availability === true){
  //     this.setState({ switch: nextProps.event.availability })
  //   }
  // }

  render() {
      var buttons = document.querySelectorAll(".toggle-button");
      var modal = document.querySelector("#modal1");

      [].forEach.call(buttons, function(button) {
        button.addEventListener("click", function() {
          modal.classList.toggle("off");
        });
      });

    return (
      <div className="modal-container">
        <div className="modal1" id="modal1">
        <h2>{this.props.startView} - {this.props.endView}</h2>
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
