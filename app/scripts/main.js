//JSON Data
var data = {
    event1: {start: 60, end: 120},  // an event from 10am to 11am
    event2: {start: 100, end: 240}, // an event from 10:40am to 1pm
    event3: {start: 700, end: 720}  // an event from 8:40pm to 9pm
};


var y = $.each(data, function(){

    var top = this.end - this.start;
    var left = 0;

    var Event = Backbone.Model.extend({
      defaults: {
        top: top,
        left: left
      },

      initialize: function(){
              var t = this.get("top");
              var l = this.get("left");
              console.log("A new Event has been added. It has the following properties: Top: " + t + ", Left: " + l);
            },
    });

    var x = new Event();
    console.log(x);

});

console.log(y);
