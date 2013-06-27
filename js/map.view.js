var MapView = (function() {

  return Backbone.View.extend({

    initialize: function() {
      this.model = this.options.model;
      this.model.on('add', _.bind(this.addMarker, this));
    },

    render: function() {
      var attribution = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,';
      attribution += '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ';
      attribution += 'Imagery © <a href="http://cloudmade.com">CloudMade</a>';

      //Create map
      this.map = L
        .map('map',
          {
            minZoom: 2,
            maxZoom: 5
          }
        )
        .fitWorld();

      //Fetch tiles from CloudMade
      L
        .tileLayer('http://{s}.tile.cloudmade.com/d672d5e3ac6e4841bd45499967b75414/100665/256/{z}/{x}/{y}.png',
          {
            attribution: attribution,
            maxZoom: 5
          })
        .addTo(this.map);

      return this;
    },

    addMarker: function(eventModel) {
      var location = eventModel.get('venue').location['geo:point'];
      var lat = location['geo:lat'];
      var lon = location['geo:long'];
      var popUpView;

      if (lat && lon) {
        popUpView = new PopUpView({
          model: eventModel
        });
        L
          .marker([lat, lon])
          .addTo(this.map)
          .bindPopup(popUpView.render().$el[0]);
      }
    }
  });

}());