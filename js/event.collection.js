var EventCollection = (function() {

  return Backbone.Collection.extend({

    model: EventModel,

    onSuccess: function(data) {
      var eventList;
      if (data.events) {
        eventList = data.events.event;
        if (eventList && eventList.length) {
          this.add(eventList);
        }
      }
    },

    onError: function(code, message){
      console.log(code + ' -> ' + message);
    },

    fetch: function(artists) {
      var that = this;

      for (var i = 0, length = artists.length; i < length; ++i) {
        LastFmAPI.artist.getEvents(
          {
            artist: artists[i]
          },
          {
            success: _.bind(that.onSuccess, that),
            error: _.bind(that.onError, that)
          }
        );
      }
    }

  });

}());