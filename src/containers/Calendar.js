import React from 'react';
import moment from 'moment';

const Calendar = () => {
  this.state = {
    dateContext: moment(),
  };

  this.weekdaysShort = moment.weekdaysShort();
  // this.months = moment.months();

  this.getYear = () => this.state.dateContext.format('Y');
  this.getMonth = () => this.state.dateContext.format('MMMM');
  this.getDay = () => this.state.dateContext.format('D');
  this.getCurrentDate = () => this.state.dateContext.get('date');

  this.daysInMonth = () => this.state.dateContext.daysInMonth();
  // this.weeksInMonth = () => Math.ceil(this.daysInMonth() / 7);
  this.firstDayOfMonth = () => moment(this.state.dateContext).startOf('month').format('d');
  this.lastDayOfMonth = () => moment(this.state.dateContext).endOf('month').format('d');

  this.renderWeekdays = () => {
    return this.weekdaysShort.map((day) => {
      return (<div key={day} className="col-sm">{day}</div>);
    });
  };

  this.renderWeeks = () => {
    const days = [];
    // if month doesn't start on Sunday (0)
    let i = 0;
    const first = this.firstDayOfMonth(); // 0-6
    for (i; i < first; i += 1) {
      days.push(<div key={`${i}empty`} className="col-sm">{''}</div>); //eslint-disable-line
    }
    // render all days
    let day = 1;
    const daysInMonth = this.daysInMonth();
    for (day; day <= daysInMonth; day += 1) {
      if (((first - 1) + day) % 7 === 0) {
        days.push(<div key={`${day}break`} className="w-100" />);
      }
      days.push(<div key={`${day}day`} className="col-sm">{day}</div>);
    }
    // if month doesn't end on Sunday
    let j = 6;
    const last = this.lastDayOfMonth();
    for (j; j > last; j -= 1) {
      days.push(<div key={`${j}empty`} className="col-sm">{''}</div>); //eslint-disable-line
    }
    return days;
  };

  return (
    <div className="container-fluid">
      <h2>Calendar</h2>
      <div className="row">
        {this.renderWeekdays()}
      </div>
      <div className="row">
        {this.renderWeeks()}
      </div>
      {/* <i data-feather="plus-circle"></i> */}
    </div>);
};

export default Calendar;
