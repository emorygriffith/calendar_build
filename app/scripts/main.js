//JSON Data
var data = {
    event1: {start: 60, end: 120},  // an event from 10am to 11am
    event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
    event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
};

//Create Event Model
var Event = Backbone.Model.extend({

  defaults: {
    top: 0,
    left: 0
  },
  initialize: function(){
          console.log("New Event initialized.")
        },
});


//Setup EventCollection
var EventCollection = Backbone.Collection.extend({
    model: Event
});


//Instantiate the Events Collection
var Events = new EventCollection;


//loop through JSON data and det the attributes of each Event object, then add it to the Events collection
$.each(data, function(){



  var event = new Event();

  var start = this.start;
  var end = this.end;
  var top = this.start;
  var the_height = this.end - this.start;
  var the_left = 0;

  event.set("start", start);
  event.set("end", end);
  event.set("top", top);
  event.set("left", the_left);
  event.set("height", the_height)

  Events.add(event);

  var div = "<div class='event' style='top:" + event.attributes.top + "px; margin-bottom: -" + event.attributes.top + "px;'> Hello, I'm a test div and my start time is " + event.attributes.start + "</div>"
  $('.cal-container').append(div);

});

console.log(Events);
