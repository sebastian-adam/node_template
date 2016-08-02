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
  var myclock = new Clock();
  setInterval(myclock.update, 1000);
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmInput = $('#alarm-input').val();
    $('#clock').append('<h3>Alarm set for <strong>' + alarmInput + '</strong></h3>');
    setInterval(function() {
      myclock.update();
      myclock.alarmClock(alarmInput);
    }, 1000);
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
