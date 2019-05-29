// None of our js will load until everything else has loaded first
$(document).ready(function(){

// setTimeout();
// setTimeout(function(){
//     console.log('this ran 3 seconds after page loading');
// }, 3000);
// console.log('this shows straightaway');
// setTimeout(function(){
//     console.log('this ran 6 seconds after page loading');
// }, 6000);

// setInterval();
// var int = setInterval(function(){
//     console.log('This appears every 2 seconds');
// }, 2000)
// setTimeout(function(){
//     clearTimeout(int);
//     console.log('Timeout has been cleared');
// }, 10000);
//
// });
// MAKE 4 FUNCTIONS: START (use setInterval), PAUSE (clearInterval), CONTINUE (setInterval), RESET (clearInterval)

    var secUnits = 0;
    var secTens = 0;
    var minUnits = 0;
    var minTens = 0;
    $('#pauseButton').hide();
    $('#continueButton').hide();
    $('#resetButton').hide();

    $('#startButton').click(function(){
        var runClock = setInterval(function(){
            secUnits ++
            if(secUnits > 9){
                secUnits = 0;
                secTens++
                if(secTens > 5){
                    secTens = 0;
                    minUnits ++
                    if (minUnits > 9){
                      minUnits = 0;
                      minTens ++
                    }
                }
            }

        $("#minutesTens").text(minTens);
        $("#minutesUnits").text(minUnits);
        $("#secondsTens").text(secTens);
        $("#secondsUnits").text(secUnits)
    }, 1000)

    $('#startButton').hide();
    $('#pauseButton').show();

    $('#pauseButton').click(function(){
      clearInterval(runClock);
      $('#pauseButton').hide();
      $('#continueButton').show();
      $('#resetButton').show();


    });
  });

  $('#continueButton').click(function(){
      var runClock = setInterval(function(){
          secUnits ++
          if(secUnits > 9){
              secUnits = 0;
              secTens++
              if(secTens > 5){
                  secTens = 0;
                  minUnits ++
                  if (minUnits > 9){
                    minUnits = 0;
                    minTens ++
                  }
              }
          }
      $("#minutesTens").text(minTens);
      $("#minutesUnits").text(minUnits);
      $("#secondsTens").text(secTens);
      $("#secondsUnits").text(secUnits)
      }, 1000)
      $('#pauseButton').show();
      $('#continueButton').hide();
      $('#pauseButton').click(function(){
        setTimeout(function(){
        clearTimeout(runClock);
      });
      });

    });

    $('#resetButton').click(function(){
      secUnits = 0;
      secTens = 0;
      minUnits = 0;
      minTens = 0;
      $("#minutesTens").text(0);
      $("#minutesUnits").text(0);
      $("#secondsTens").text(0);
      $("#secondsUnits").text(0);
      $('#pauseButton').hide();
      $('#resetButton').hide();
      $('#startButton').show();
      $('#continueButton').hide();
    });

})
