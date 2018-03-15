import React, { Component } from 'react';
import moment from 'moment';

import Header from '../components/Header';
import Weekdays from '../components/Weekdays';
import Weeks from '../components/Weeks';

const weekdaysShort = moment.weekdaysShort();
// const months = moment.months();

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      // today: moment(),
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
  }

  getYear() { return this.state.dateContext.format('Y'); }
  getMonth() { return this.state.dateContext.format('MMMM'); }
  getDay() { return this.state.dateContext.format('D'); }
  getCurrentDate() { return this.state.dateContext.get('date'); }

  daysInMonth() { return this.state.dateContext.daysInMonth(); }
  weeksInMonth() { return Math.ceil(this.daysInMonth() / 7); }
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

  render() {
    return (
      <div className="container-fluid">
        <Header
          month={this.getMonth()}
          year={this.getYear()}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <Weekdays weekdaysShort={weekdaysShort} />
        <Weeks
          firstDay={this.firstDayOfMonth()}
          lastDay={this.lastDayOfMonth()}
          daysInMonth={this.daysInMonth()}
          weeksInMonth={this.weeksInMonth()}
        />
      </div>);
  }
}

export default Calendar;
