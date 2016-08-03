var Clock = require('./../js/time.js').clockModule;

$(document).ready(function(){
  var MyClock = new Clock();
  setInterval(function() {
    MyClock.updateTime();
    $('#radio').text(MyClock.date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
  $('#alarm-button').click(function() {
    MyClock.alarm = $('#alarm-input').val();
    $('#alarm-time').text('Alarm set for ' + MyClock.alarm);
    MyClock.alarmClock();
  });
});

exports.clockModule = Clock;
