// Eventually move to time.js
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};


$(document).ready(function(){
  datetime = $('#time');
  update();
  setInterval(update, 1000);
});
