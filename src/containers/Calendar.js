import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Header from '../components/Header';
import Weekdays from '../components/Weekdays';
import Weeks from '../components/Weeks';
import Modal from './Modal';
import FloatingButton from '../components/FloatingButton';
import { addEvent } from '../actions';

const weekdaysShort = moment.weekdaysShort();

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      viewAsList: false,
    };

    this.getYear = this.getYear.bind(this);
    this.getMonth = this.getMonth.bind(this);
    this.getDay = this.getDay.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.weeksInMonth = this.weeksInMonth.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.lastDayOfMonth = this.lastDayOfMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.listView = this.listView.bind(this);
    this.calendarView = this.calendarView.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }

  getYear() { return this.state.dateContext.format('Y'); }
  getMonth() { return this.state.dateContext.format('MMMM'); }
  getDay() { return this.state.dateContext.format('D'); }

  daysInMonth() { return this.state.dateContext.daysInMonth(); }
  weeksInMonth() {
    return Math.ceil((parseInt(this.daysInMonth(), 10) + parseInt(this.firstDayOfMonth(), 10)) / 7);
  }
  firstDayOfMonth() { return moment(this.state.dateContext).startOf('month').format('d'); }
  lastDayOfMonth() { return moment(this.state.dateContext).endOf('month').format('d'); }

  prevMonth() {
    const dateContext = moment(this.state.dateContext).subtract(1, 'month');
    this.setState({ dateContext });
  }

  nextMonth() {
    const dateContext = moment(this.state.dateContext).add(1, 'month');
    this.setState({ dateContext });
  }

  listView() {
    this.setState({ viewAsList: true });
  }

  calendarView() {
    this.setState({ viewAsList: false });
  }

  onModalSubmit(data) { //eslint-disable-line
    this.props.dispatch(addEvent(data));
    this.modal.resetState();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          month={this.getMonth()}
          year={this.getYear()}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
          listView={this.listView}
          calendarView={this.calendarView}
          viewAsList={this.state.viewAsList}
        />
        <Weekdays
          weekdaysShort={weekdaysShort}
          viewAsList={this.state.viewAsList}
        />
        <Weeks
          firstDay={this.firstDayOfMonth()}
          lastDay={this.lastDayOfMonth()}
          daysInMonth={this.daysInMonth()}
          weeksInMonth={this.weeksInMonth()}
          viewAsList={this.state.viewAsList}
          weekdaysShort={weekdaysShort}
          events={this.props.events}
        />
        <Modal
          ref={(modal) => { this.modal = modal; }}
          today={this.state.dateContext}
          onModalSubmit={this.onModalSubmit}
        />
        <FloatingButton />
      </div>);
  }
}

Calendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};
Calendar.defaultProps = {
  events: [],
};

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(Calendar);
