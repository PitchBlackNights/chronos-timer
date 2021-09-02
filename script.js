var clockSec = 0;
var clockMin = 0;
var clockHr = 0;

/*Clock*/
/*ID = 1*/
setInterval(function () {
  /*Display Seconds*/
  clockSec += 1;
  if (clockSec < 10) {
    document.getElementById("clock-sec").innerHTML = "00" + clockSec;
  } else {
    if (clockSec < 100 && clockSec > 9) {
      document.getElementById("clock-sec").innerHTML = "0" + clockSec;
    } else {
      document.getElementById("clock-sec").innerHTML = clockSec;
    }
  }

  /*Display Minutes*/
  if (clockSec >= 365) {
    clockMin += 1;
    clockSec = 0;
    document.getElementById("clock-sec").innerHTML = "000";
    if (clockMin < 10) {
      document.getElementById("clock-min").innerHTML = "0" + clockMin;
    } else {
      document.getElementById("clock-min").innerHTML = clockMin;
    }
  }

  /*Display Hours*/
  if (clockMin >= 60) {
    clockHr += 1;
    clockMin = 0;
    document.getElementById("clock-min").innerHTML = "00";
    document.getElementById("clock-hr").innerHTML = clockHr;
  }
}, 1000);

/*------------------------------------------------------------------------*/

var timerHr = 21;
var timerMin = 25;
var timerSec = 0;

/*Timer*/
/*ID = 2*/
setInterval(function () {
  if (timerSec <= 0) {
    if (timerMin <= 0) {
      if (timerHr <= 0) {
        stopTimer();
        document.getElementById("timer-hr").innerHTML = timerHr;
        if (timerMin < 10) {
          document.getElementById("timer-min").innerHTML = "0" + timerMin;
        } else {
          document.getElementById("timer-min").innerHTML = timerMin;
        }
        if (timerSec < 100 && timerSec > 9) {
          document.getElementById("timer-sec").innerHTML = "0" + timerSec;
        } else {
          if (timerSec < 10) {
            document.getElementById("timer-sec").innerHTML = "00" + timerSec;
          } else {
            document.getElementById("timer-sec").innerHTML = timerSec;
          }
        }
      } else {
        timerHr -= 1;
        timerMin = 59;
        timerSec = 364;
        document.getElementById("timer-hr").innerHTML = timerHr;
        if (timerMin < 10) {
          document.getElementById("timer-min").innerHTML = "0" + timerMin;
        } else {
          document.getElementById("timer-min").innerHTML = timerMin;
        }
        if (timerSec < 100 && timerSec > 9) {
          document.getElementById("timer-sec").innerHTML = "0" + timerSec;
        } else {
          if (timerSec < 10) {
            document.getElementById("timer-sec").innerHTML = "00" + timerSec;
          } else {
            document.getElementById("timer-sec").innerHTML = timerSec;
          }
        }
      }
    } else {
      timerMin -= 1;
      timerSec = 364;
      document.getElementById("timer-hr").innerHTML = timerHr;
      if (timerMin < 10) {
        document.getElementById("timer-min").innerHTML = "0" + timerMin;
      } else {
        document.getElementById("timer-min").innerHTML = timerMin;
      }
      if (timerSec < 100 && timerSec > 9) {
        document.getElementById("timer-sec").innerHTML = "0" + timerSec;
      } else {
        if (timerSec < 10) {
          document.getElementById("timer-sec").innerHTML = "00" + timerSec;
        } else {
          document.getElementById("timer-sec").innerHTML = timerSec;
        }
      }
    }
  } else {
    timerSec -= 1;
    document.getElementById("timer-hr").innerHTML = timerHr;
    if (timerMin < 10) {
      document.getElementById("timer-min").innerHTML = "0" + timerMin;
    } else {
      document.getElementById("timer-min").innerHTML = timerMin;
    }
    if (timerSec < 100 && timerSec > 9) {
      document.getElementById("timer-sec").innerHTML = "0" + timerSec;
    } else {
      if (timerSec < 10) {
        document.getElementById("timer-sec").innerHTML = "00" + timerSec;
      } else {
        document.getElementById("timer-sec").innerHTML = timerSec;
      }
    }
  }
}, 1000);

function stopTimer() {
  clearInterval(2);
}

/*------------------------------------------------------------------------*/
