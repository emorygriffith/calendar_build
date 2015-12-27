//JSON Data
var data = {
    event1: {start: 60, end: 120},  // an event from 10am to 11am
    event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
    event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
};

$.each(data, function(){

    var start = this.start;
    var end = this.end;
    var height = this.end - this.start;
    var a = 35;
    console.log(start, end, height);


    //setup the Backbone Model
    var Event = Backbone.Model.extend({
      defaults: {
        start: start,
        end: end,
        height: height
      },

      initialize: function(){
              var t = this.get("start");
              console.log(t + " has been added");
            },

    });



new Event(); //instantiate each model

}); //end $.each loop
