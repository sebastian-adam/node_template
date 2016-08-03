var Constructor = require('./../js/other-template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Constructor = require('./../js/template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

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

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      console.log(JSON.stringify(response));
      // paste into http://jsonprettyprint.com/ for easy to understand methods
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
