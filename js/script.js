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

    var secondsUnits = 0;
    var secondsTens = 0;
    var minutesUnits = 0;
    var minutesTens = 0;
    $('#stopButton').hide();

    $('#startButton').click(function(){
        var int = setInterval(function(){
            secondsUnits ++
            if(secondsUnits > 9){
                secondsUnits == 0;
                secondsTens++
                if(secondsTens > 5){
                    secondsTens == 0;
                    minutesUnits ++
                }
            }

        // console.log(minutesTens + minutesUnits + ":" + secondsTens + secondsUnits);

        $("#minutesTens").text(minutesTens);
        $("#minutesUnits").text(minutesUnits);
        $("#secondsTens").text(secondsTens);
        $("#secondsUnits").text(secondsUnits)
    }, 1000)
      // setTimeout(function(){
      //     clearTimeout(int);
      //     console.log('Timeout has been cleared');
      // }, 6000);
      // var currentTime = (minutesTens + minutesUnits + ":" + secondsTens + secondsUnits);

      $('#startButton').hide();
      $('#stopButton').show();
    });

    setTimeout(function(){
        $('#stopButton').click(function(){
            clearTimeout(currentTime);

        })
    })



// MAKE 4 FUNCTIONS: START (Use set interval), PAUSE (clear interval), CONTINUE (set interval), RESET (clear interval)




});
