var Clock = require('./../js/time.js').clockModule;

$(document).ready(function(){
  var MyClock = new Clock();
  setInterval(function() {
    MyClock.updateTime();
    $('#radio').text(MyClock.date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
  $('#alarm-button').click(function() {
    MyClock.alarm = $('#alarm-input').val();
    $('#clock').append('<h3>Alarm set for <strong>' + MyClock.alarm + '</strong></h3>');
    MyClock.alarmClock();
  });
});

exports.clockModule = Clock;
