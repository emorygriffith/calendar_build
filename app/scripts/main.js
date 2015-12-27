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
          var t = this.get("top");
          var l = this.get("left");
          //console.log("A new Event has been added. It has the following properties: Top: " + t + ", Left: " + l);
        },
});


//Setup EventCollection
var EventCollection = Backbone.Collection.extend({
    model: Event
});


//Instantiate the Events Collection
var Events = new EventCollection;


//loop through JSON data and add objects the events collection
$.each(data, function(){

  var event = new Event();

  var the_top = this.end - this.start;
  var the_left = 0;

  event.set("top",the_top);
  event.set("left", the_left);

  console.log(event);

  Events.add(event);


});
