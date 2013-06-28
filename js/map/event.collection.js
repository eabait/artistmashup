var EventCollection = (function() {

  return Backbone.Collection.extend({

    model: EventModel,
    count: 0,

    onSuccess: function(data) {
      var eventList;
      this.count += 1;
      console.log('successful request ' + this.count);
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
      var throttledRequest = _.throttle(LastFmAPI.artist.getEvents, 1);

      for (var i = 0, length = artists.length; i < length; ++i) {
        throttledRequest(
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