import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: '',
      date: props.today,
      repeat: 'Doesn\'t repeat',
    };

    this.resetState = this.resetState.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  resetState() {
    this.setState({
      title: '',
      location: '',
      date: this.props.today,
      repeat: 'Doesn\'t repeat',
    });
  }

  handleDateChange(date) {
    this.setState({ date });
  }

  handleInputChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Create new event</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="needs-validation">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Add title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <div className="col-12">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i data-feather="map-pin" />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        placeholder="Add location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 col-sm-7">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i data-feather="calendar" />
                        </div>
                      </div>
                      <DatePicker
                        dateFormat="YYYY/MM/DD"
                        selected={this.state.date}
                        onChange={this.handleDateChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <select
                      className="form-control"
                      name="repeat"
                      value={this.state.repeat}
                      onChange={this.handleInputChange}
                    >
                      <option>{'Doesn\'t repeat'}</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => this.props.onModalSubmit(this.state)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  today: PropTypes.object.isRequired, //eslint-disable-line
  onModalSubmit: PropTypes.func.isRequired,
};

export default Modal;
