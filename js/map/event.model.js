var EventModel = (function() {

  return Backbone.Model.extend({

    defaults : {
      attendance: 0,
      cancelled: false,
      description: '',
      endDate: null,
      id: '',
      image: null,
      reviews: 0,
      startDate: '',
      tag: '',
      tickets: '',
      title: '',
      url: '',
      venue: null,
      website: ''
    },

    toJSON: function() {
      var ser = Backbone.Model.prototype.toJSON.apply(this);
      ser.image = ser.image[3]['#text'];
      return ser;
    }

  });

}());