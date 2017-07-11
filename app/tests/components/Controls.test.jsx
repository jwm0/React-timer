var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  it('should show pause button when state is set to started', () => {
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    var $pauseButton = $el.find('button:contains(Pause)');

    expect($pauseButton.length).toBe(1);
  });

  it('should show start button when state is set to paused', () => {
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    var $startButton = $el.find('button:contains(Start)');

    expect($startButton.length).toBe(1);
  });

});
