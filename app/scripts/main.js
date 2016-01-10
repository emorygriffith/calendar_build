var data = [];
//make the API call
$.getJSON( "https://appcues-interviews.firebaseio.com/calendar/events.json", function( json_data ) {
  $.each( json_data, function( key, val ) {
    //push the objects that this API returns to the "data" array
    data.push(val);
  });


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
var layoutDay = function(){

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

        var div = "<div class='event' style='height: " + event.attributes.height + "px; margin-top:" + event.attributes.top + "px;'><p class='title'>Sample Item</p><p class='location'>Sample Location</p></div>"


        $('.cal-container').append(div);
        


      }); //end each loop


}; //end layoutDay function


layoutDay();

}); //end JSON function
