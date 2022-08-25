import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.getTimeDifference(this.props.eventDate);
    setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
  }

  leadingZero(num) {
    return (num < 10 && num > 0) ? "0" + num : num;
  }

  getTimeDifference(eventDate) {
    const time = Date.parse(eventDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <>
        <div className="timer">
        <div className="clock">
          <span className="day">{this.leadingZero(this.state.days)}</span>
          <span className="day-title">{this.state.days == 1 ? 'Day' : 'Day'}</span>
        </div>
        <div className="clock">
          <span className="hour">{this.leadingZero(this.state.hours)}</span>
          <span className="hour-title">{this.state.hours == 1 ? 'Hour' : 'Hour'}</span>
        </div>
        <div className="clock">
          <span className="minute">{this.leadingZero(this.state.minutes)}</span>
          <span className="minute-title">{this.state.minutes == 1 ? 'Min' : 'Min'}</span>
        </div>
        <div className="clock">
          <span className="second">{this.leadingZero(this.state.seconds)}</span>
          <span className="second-title">{this.state.seconds == 1 ? 'Sec' : 'Sec'}</span>
        </div>
        </div>
      </>
    );
  }
}

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        { name:'', date:'November 13, 2022' },
      ],
      newDate: "",
      newName: "",
    };
  }
  
  addNewEvent = () => {
    let evt = {name: this.state.newName, date: this.state.newDate};
    let newEvents = this.state.events.concat(evt);
    this.setState({
      newDate: "",
      newName: "",
      events: newEvents,
    });
  }
  
  render() {
    let events = this.state.events.map((evt) =>
      <Timer key={evt.date} eventName={evt.name} eventDate={evt.date} />
    );
    return (
      <div className="countdownTimer">
        {events}
      </div>                           
    )
  }
}

export default CountdownTimer;
