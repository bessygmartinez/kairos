import React from "react";
import "./modal.css";
import moment from 'moment';
import { connect } from "react-redux";
import PropTypes from "prop-types";

// const localizer = momentLocalizer(moment);

class Modal extends React.Component {
    state = {
        switch: true,
        modalAvailability: true
    }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  onChange = e => {
    this.setState({ 
        switch: !this.state.switch,
        modalAvailability: !this.state.switch
     });
  };

  render() {
    console.log(this.props)
    if (!this.props.show) {
      return null;
    }

    var buttons = document.querySelectorAll(".toggle-button");
    var modal = document.querySelector("#modal1");

[].forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    modal.classList.toggle("off");
  })
});

    return (

        <div className="modal-container">
        <div className="modal1 fade" id="modal1">
        <h2>{this.props.start}</h2>
        <div className="content">
            <form>
                <div className="switch">
                    <label className="text-secondary">
                        <input
                        type="checkbox"
                        checked={this.state.switch}
                        onChange={this.onChange}
                        value={this.state.switch}
                        id="switch" />
                        Available
                    </label>
                </div>
            </form>
            </div>
        <div className="actions">
          <button className="btn btn-raised btn-large waves-effect waves-light hoverable teal-btn text-white toggle-button ml-3 mb-3" onClick={this.onClose}>
            Submit
          </button>
        </div>
      </div>
      </div>
    );
  }
}

Modal.propTypes = {
    switch: PropTypes.bool,
    modalAvailability: PropTypes.bool
};

const mapStateToProps = state => ({
    switch: state.switch,
});

export default connect(
    mapStateToProps,
)(Modal);