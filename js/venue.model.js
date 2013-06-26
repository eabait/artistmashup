var VenueModel = (function() {

  return Backbone.Model.extend({

    defaults : {
      id: '',
      image: null,
      location: null,
      name: '',
      phonenumber: '',
      url: '',
      website: ''
    }

  });

}());