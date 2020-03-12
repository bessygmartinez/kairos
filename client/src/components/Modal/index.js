import React from "react";
import "./modal.css";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      switch: ""
    };
  }

  componentDidMount() {

    if (this.props.event == null) {
      return this.setState({ switch: true })
    } else if (this.props.event.availability === false) {
      return this.setState({ switch: false });
    } else if (this.props.event.availability === true) {
      return this.setState({ switch: true });
    } else if (this.props.event.slots) {
      return this.setState({ switch: true })
    }
  }
  onClose = e => {
    e.persist();
    this.props.onClose && this.props.onClose(e);
  };

  onChange = e => {
    this.setState({
      switch: !this.state.switch
    });
  };

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
          <h2>{this.props.start}</h2>
          <div className="content">
            <form>
              <div className="switch mt-3">
                <label className="text-secondary">
                  <input
                    type="checkbox"
                    onChange={this.onChange}
                    checked={this.state.switch}
                    value={this.state.switch}
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
              onClick={this.onClose}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
