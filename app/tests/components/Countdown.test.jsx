var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should NOT let state count drop below 0', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001)
    });

    it('should have static count number when paused', () =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      countdown.handleChangeState('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(10);
        expect(countdown.state.countdownStatus).toBe('paused');
      },1001)
    });

    it('should set the count value to 0 when stopped', () =>{
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);
      countdown.handleChangeState('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
      },1001)
    });

  });

})
