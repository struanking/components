import React, { Component, PropTypes } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: props.start,
      time: props.start,
      isFinished: false,
      isPaused: false,
      isRunning: false,
    };

    this.onFinish = this.onFinish.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onReset = this.onReset.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    if (this.props.autostart) {
      this.onStart();
    }
  }

  componentWillUnmount() {
    // TODO avoid duplication of clearInterval
    clearInterval(this.countdown);
  }

  onFinish() {
    this.setState({
      isFinished: true,
    });
    clearInterval(this.countdown);
  }

  onStart() {
    this.setState({
      isRunning: true,
    });
    this.countdown = setInterval(this.decrement, 1000);
  }

  onPause() {
    this.setState({
      isPaused: true,
      isRunning: false,
    });
    clearInterval(this.countdown);
  }

  onReset() {
    // TODO Avoid duplication here and in constructor
    this.setState({
      isFinished: false,
      isPaused: false,
      isRunning: false,
      time: this.state.start,
    });
  }

  decrement() {
    if (this.state.time && this.state.isRunning) {
      this.setState({
        time: this.state.time - 1,
      });
    } else if (this.state.time === 0) {
      this.onFinish();
    }
  }

  renderControls() {
    const { isFinished, isPaused, isRunning } = this.state;
    const startBtn = <button key="start" type="button" onClick={this.onStart}>Start</button>;
    const pauseBtn = <button key="pause" type="button" onClick={this.onPause}>Pause</button>;
    const restartBtn = <button key="restart" type="button" onClick={this.onStart}>Restart</button>;
    const resetBtn = <button key="reset" type="button" onClick={this.onReset}>Reset</button>;
    let controls = startBtn;

    if (isRunning) {
      controls = pauseBtn;
    } else if (isPaused) {
      controls = [restartBtn, resetBtn];
    } else if (isFinished) {
      controls = [resetBtn];
    }

    return controls;
  }

  render() {
    const { start, time } = this.state;
    let controls = this.renderControls();

    return (
      <div>
        <p>
          Start: <time>{start}</time>
        </p>
        <p>
          Countdown: <time>{time}</time>
        </p>
        <p>
          {controls}
        </p>
      </div>
    );
  }
}

Timer.defaultProps = {
  autostart: false,
};

Timer.propTypes = {
  autostart: PropTypes.bool,
  start: PropTypes.number.isRequired,
};

export default Timer;
