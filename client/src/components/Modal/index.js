import React from "react";
import { toast } from "react-toastify";
import workdaysAPI from "../../utils/workdaysAPI";
import "./modal.css";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      switch: ""
    }  
  }

  componentDidMount() {
    this.setState({switch: this.props.event.availability})
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.event.availability === true){
      this.setState({ switch: nextProps.event.availability })
    }
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  onChange = e => {
    this.setState({ switch: !this.state.switch })
  };

  onSubmit = e => {
    const workdaysUpdate = {
      title: this.props.auth.user.name,
      availability: this.state.switch,
      start: this.props.startDate,
      end: this.props.endDate,
      allDay: true
    };

    workdaysAPI
      .saveWorkday(this.props.auth.user.id, workdaysUpdate)
      .then(toast.success("Schedule has been updated"))

      workdaysAPI.getOneEmployeeWorkdays(this.props.auth.user.id)
      .then(console.log(this.props.auth.user.workdays))

    this.onClose()
  }

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
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
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
              onClick={this.onSubmit}
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
  auth: state.auth,
});

export default connect(mapStateToProps)(Modal);
