// $(document).ready()

// $(document).scroll(function(e){

// var scrollAmount = $(window).scrollTop();
// console.log(scrollAmount)

// var documentHeight = $(document).height();
// console.log(documentHeight)

// var scrollPercent = (scrollAmount / 2049) * 100;
// console.log(scrollPercent)

// var start;

// });

var start;

$(document).ready(function() {
  start = Date.getTime();

  $(window).unload(function() {
      end = Date.getTime();
      $.ajax({ 
        url: "log.php",
        data: {'timeSpent': end - start}
      })
    });
});

// var start_time = new Date();

// var end_time = new Date();

// var elapsed_ms = end_time - start_time;
// var seconds = Math.round(elapsed_ms / 1000);
// var minutes = Math.round(seconds / 60);
// var hours = Math.round(minutes / 60);

// var sec = TrimSecondsMinutes(seconds);
// var min = TrimSecondsMinutes(minutes);

// function TrimSecondsMinutes(elapsed) {
//     if (elapsed >= 60)
//         return TrimSecondsMinutes(elapsed - 60);
//     return elapsed;
// }

// console.log(TrimSecondsMinutes);
