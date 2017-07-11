var React = require ('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    setCountdownState: React.PropTypes.func.isRequired
  },
  setCountdownState: function (newState) {
    return () => {
      this.props.setCountdownState(newState);
    };
  },
  render: function () {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.setCountdownState('paused')}>Pause</button>
      } else {
        return <button className="button primary" onClick={this.setCountdownState('started')}>Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.setCountdownState('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
