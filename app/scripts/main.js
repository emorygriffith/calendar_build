var events = {
    event1: {start: 60, end: 120},  // an event from 10am to 11am
    event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
    event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
};



//on click
// $(".button1").click(function() {
//loop over array of objects adn console log each height and width
  $.each(events, function(key, value){
    console.log("My height is " + (value.end - value.start));
    //console.log(value.start)
  });




// });

// //  $( ".cal-container" ).add( "event" ).css( "background-color", "red" );
//
//
//
//
//
//
//
// //  $( ".cal-container" ).append( "<div class=event>Test</div>" );
//   //$(".cal-container").css("background-color", "yellow");
//
//
