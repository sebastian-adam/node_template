function Clock() {
  this.date = null;
  this.time = null;
  this.alarm = null;
}

Clock.prototype.updateTime = function() {
  this.date = moment(new Date());
  dateObject = this.date.toObject();
  if (dateObject.minutes < 10) {
    this.time = dateObject.hours + ":0" + dateObject.minutes;
  } else {
    this.time = dateObject.hours + ":" + dateObject.minutes;
  }
};

Clock.prototype.alarmClock = function() {
  if (this.time === this.alarm) {
    document.getElementById('alarm-wav').play();
    setInterval(this.update, 1000);
  }
};

exports.clockModule = Clock;
